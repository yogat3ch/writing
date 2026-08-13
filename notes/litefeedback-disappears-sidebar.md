---
name: Bug Report
title: "[Bug]: Lite Feedback injected `.hidden` CSS hides the host application's sidebar on all viewport widths"
labels:
  - bug
updated: 2026-08-13T19:45:17-04:00
created: 2026-08-13T19:44:47-04:00
---

  

## Summary

  

When the Lite Feedback widget script (`https://www.litefeedback.com/min.litefeedback.js`)

is injected into a host app that uses **Tailwind CSS v4**, the widget's bundled

stylesheet works fine on its own — but it also carries a **generic, unlayered**

`.hidden { display: none; }` rule that **overrides the host app's responsive

`lg:flex` utility and hides a desktop sidebar at every viewport width**.

  

The widget itself loads and renders correctly; the side effect is on the host page's

layout, not the widget's own popup. Nothing is "broken" in the widget visually, which

makes this hard to diagnose — the host's element is still in the DOM, just

`display: none` and invisible.

  

### Environment

  

- **Host:** SvelteKit + Tailwind CSS v4 (`@tailwindcss/vite`), desktop sidebar using `hidden lg:flex`

- **Widget:** Lite Feedback one-line script, key `w_mss2065v92xbjw9agov`

- **Browser:** Chrome (reproduced at 1280px viewport)

  

## Steps to reproduce

  

1. Create a SvelteKit/Tailwind v4 app with a sidebar element:

```html

<aside class="hidden lg:flex flex-col …">…</aside>

```

2. Configure `lg` (>=1024px) so the sidebar should be `display: flex`.

3. Inject the Lite Feedback script into the page:

```html

<script src="https://www.litefeedback.com/min.litefeedback.js" defer></script>

```

4. Observe the sidebar at a desktop width (e.g. 1280px).

  

### Expected behavior

  

The host sidebar renders as `display: flex` on `lg` (>=1024px) screens, as Tailwind's

`hidden lg:flex` prescribes.

  

### Actual behavior

  

The sidebar computes to `display: none` even at 1280px. The element remains in the

DOM (it can be queried and its innerHTML is intact), but it is hidden.

  

## Root cause / analysis

  

### 1. Tailwind v4 generates its utilities inside a cascade layer

  

Tailwind v4 emits utilities like `.hidden` and `lg:flex` inside `@layer utilities`:

  

```css

@layer utilities {

.hidden { display: none; }

@media (min-width: 64rem) {

.lg\:flex { display: flex; }

}

}

```

  

### 2. Lite Feedback injects its own unlayered `.hidden` rule

  

The widget's bundled CSS (inlined into `min.litefeedback.js`) contains:

  

```css

.hidden {

display: none;

}

```

  

It is injected into the page via a dynamically appended `<style>` element, so this

rule is **not inside any `@layer`**.

  

### 3. Unlayered rules win over layered rules in the CSS cascade

  

Per the [CSS Cascade 5 spec](https://www.w3.org/TR/css-cascade-5/#layering), normal

declarations in an **unlayered** style rule take precedence over normal declarations in any

`@layer` (and over unlayered-*layer order* is after all layers). So the widget's

`.hidden { display: none }` outranks Tailwind's layered `lg:flex { display: flex }`

**at every breakpoint**, regardless of source order. The host's responsive

`hidden lg:flex` collapses to `display: none` everywhere.

  

This is a **generic-class-name collision** in the global scope: the widget's CSS was

written assuming it would coexist with simple `display:none` semantics, but it redefines a

very common class that the host also uses for responsive show/hide.

  

## How we solved it (host-side)

  

We stopped the host from depending on the generic `.hidden` utility for the responsive

toggle, using Tailwind's **scoped** `max-lg:hidden` instead of the bare `hidden`:

  

```diff

-<aside class="hidden lg:flex flex-col …">

+<aside class="max-lg:hidden lg:flex flex-col …">

```

  

`max-lg:hidden` compiles to a distinct `.max-lg\:hidden` class (a media-scoped

utility) that does **not** match the widget's `.hidden` selector. The host layout is

now unaffected by the widget's stylesheet:

  

- mobile (`<1024px`): hidden (via `max-lg:hidden`)

- desktop (`>=1024px`): visible (via `lg:flex`)

  

## Recommendations for Lite Feedback

  

1. **Scope every widget selector.** Prefix all classes and IDs (you already prefix most with

`lf69_`, e.g. `.lf69_reopen-button`, `#lf69_feedback-popup`) — but the plain

`.hidden` rule slipped through. Prefer a namespaced utility, e.g. `.lf69-hidden`.

  

2. **Avoid redefining generic global classes at all.** Don't ship `.hidden`,

`.visible`, `.flex`, `.container`, `.active`, etc. Use your own prefix or an inline

`style`/custom property where a one-off utility is needed.

  

3. **Wrap your CSS in a cascade layer** (`@layer widget { … }`). A properly layered

stylesheet is naturally lower priority than unlayered host styles and cannot unexpectedly

override host rules. Better: scope by an attribute or a wrapper so rules only target DOM

you own.

  

4. **Consider Shadow DOM** for the popup/reopen elements. Encapsulating the widget's DOM

and styles in a shadow root would make collisions with the host page virtually impossible.

  

5. **Document the collision risk + provide a scoped build.** If you keep a global stylesheet,

note that unlayered rules override layered host utilities and recommend (or ship) a version

with all selectors namespaced.

  

6. **Add a `data-lf69-*` attribute gate.** Since you already read `data-lf69`-style config,

you could apply your stylesheet only when the widget is actually mounted, or gate the generic

rules behind a class only present on your own containers.

  

7. **Test the widget against a Tailwind v4 host.** Tailwind v4's `@layer` architecture is

increasingly common; a small integration check for generic-class collisions would catch this class

of bug proactively.