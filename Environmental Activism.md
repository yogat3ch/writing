---


---

<p>Resources:</p>
<ul>
<li><a href="https://www.youtube.com/watch?v=PrWaE0_fUTo">Debugging with browser() video</a></li>
</ul>
<h1 id="overview">Overview</h1>
<p>There are a number of useful tools for debugging a complex golem app. R provides a collection of functions, and we’ve written a number of our own. We also use two helpful “modes” for debugging. Finally, we discuss a way to hide a button that opens an R browser in a module from the Chrome Devtools Javascript console.</p>
<h2 id="useful-methods">Useful methods</h2>
<p>The following is a collection of the most useful methods found over time prioritized by how often they come in handy:.</p>
<ol>
<li>Reprex mode (use_reprex) - enables much faster navigation to the breakpoint within the app</li>
<li>Debug mode (use_debug) - enables all debugging messages to show in the JS and R consoles.</li>
<li>browser() inline where the error messages indicate the break is. Also note the expr argument to browser</li>
<li>utils::recover() to move around the call stack once you’ve entered browser mode</li>
<li>traceback() or rlang::trace_back() for errors from functions in the Rstudio ecosystem. This displays a call stack trace for where the last error occurred if what the console displayed after the error occurred was not sufficient.</li>
<li>UU::shiny_error_recover() for when the error message is obtuse and there’s no clear indication as to where in the code the error occurred.</li>
<li>debugonce() for debugging a specific function call inside the reactive where it’s called. Very useful when you’ve calls of that function all over your app, but you know in which reactive the function is causing the error (often identifiable by UU::shiny_error_recover() )</li>
</ol>
<h1 id="reprex-and-debug-modes">Reprex and debug modes</h1>
<p>Many of our R repos have two special “modes” enabled by options in .Rprofile: reprex and debug modes indicated by the use_reprex and use_debug options respectively. These can be toggled on quickly and easily with the UU::toggle$<a href="">option</a> where option is the option you wish to toggle (without brackets).</p>
<h2 id="debug-mode">Debug mode</h2>
<p>The debug mode turns on all debugging error messages for much more verbose output in the console. This is made possible by a couple of supporting functions used during development.</p>
<h3 id="shinyvirgadbg_msg">shinyVirga::dbg_msg</h3>
<p>This function uses a glue string to construct a message that will print to both the R console, and the Javascript console if shinyjs is installed when debug mode is on. virgaUtils::dbg_msg is a non-Shiny equivalent for projects that don’t use Shiny but for which you want to enable a debug mode. This is very useful for adding messages that identify specify reactives/observers firing and what their data is to be able to discern the order in which they are firing, or if they are firing multiple times unexpectedly, and what their inputs or outputs are.</p>
<h3 id="virgautilsif_debug">virgaUtils::if_debug</h3>
<p>This function wraps an expression of your choice that will fire when debug mode is on. This allows for adding a couple lines of code to construct a specific message that will only show when debug mode is on.</p>
<h3 id="shinyvirgause_msg_mod_fun">shinyVirga::use_msg_mod_fun</h3>
<p>This function will add a file with some code that will consistently add a call to msg_mod_fun to each server module in your app. It will print output that provides a couple of helpful messages useful for debugging</p>
<p>NS: the javascript namespace|call: the module call|env: <code>the environment address</code></p>
<p>In practice it looks like this:<br>
<img src="https://codahosted.io/docs/tiv3E-sbAl/blobs/bl-1lT5jX-C2k/56d8de1f01d14fb06b8d82ccf58ba0085a7252635d029ff884d91c236978db6db0beab6717085ae3f1761d513596562822ea468b5a0c1b0c5d2e951c14d2b391d377e70c79d92e76f3b61255dc29b2ba1898eaa1f246331ba7c1e175241b6fcbc8c8b42a" alt="image.png"></p>
<p>You will see the JS namespace, the module call, and the environment address of the server in which the error resides, just before the error itself.</p>
<h2 id="reprex-mode">Reprex mode</h2>
<p>Reprex mode is facilitated by consistent maintenance of the developer when building out new features. You can see when reprex mode is on by first using <code>UU::write_opts()</code> to write a file in R that will populate with opts methods for all of the options in .Rprofile in the app’s present state. You can then use <code>opts$option_name()</code> to retrieve the value of the option. After doing so, <code>opts$use_reprex()</code> will always show whether reprex mode is on. You can is this with a conditional statement to auto-populate user inputs or perform specific functions such that you can skip manually doing inputs when you’re developing and relaunching the app over and over to test your code.</p>
<p>In practice this might look like this:<br>
<img src="https://codahosted.io/docs/tiv3E-sbAl/blobs/bl-N6RuU7fg9X/436ddf889ec6176ad2f2f8e4115526d5490cc739d9100473febdd03adbec46861816afb05b20c94efed3a012d68f1b6a4e95c1808ec3e81db591ff61cdb5ab0244d27273d308a25f851347902f4287b46b26960fb6f164b9109883997c501b1bee32a088" alt="image.png"></p>
<p>Which makes it such that a specific tab will automatically open first when <code>opts$use_reprex()</code> returns TRUE.</p>
<p>You can also set a similar Boolean value on the Javascript side by adding the following to app_ui.R &gt;  golem_add_external_resources in the call to <code>tags$head</code> in a golem app:</p>
<pre><code>tags$script(UU::glue_js("document.reprex_mode = *{tolower(opts$use_reprex())}*;")),
</code></pre>
<h1 id="uushiny_error_recover">UU::shiny_error_recover()</h1>
<p>Sometimes there will just be a terse error message and no traceback or line numbers, when this happens, use this function to instruct R to use <code>utils::recover</code> every time there is an error. Each error will open a large call stack, which you can poke around in by selecting the call frame to browse in. Given the abstraction in a shiny app, the call stack typically isn’t too useful to poke around in in most cases, but, somewhere in the call stack you will be able to identify an offending observer or reactive. Identifying the specific observer/reactive is further aided by <a href="https://shiny.rstudio.com/reference/shiny/1.0.3/observeevent">using the label argument</a> on your observers/reactives, as the label will appear in the stack trace.</p>
<p>A not very informative traceback example:</p>
<p><img src="https://codahosted.io/docs/tiv3E-sbAl/blobs/bl-YtWq_7aBxm/16c2fabe391a951b2e84efb62a2bf682e1f4a5d798e4d34ad3924ba960fe20dd6f86b45e1e56d996da2d346208c3b4043d16830ba545acde782b20c4bf3e2d0b385fbb5428b7b6fdcbffbdf9dce5adf409ade6c907ca061c851a5bd97b17c085bb37c303" alt="image.png"></p>
<p>When you get a traceback like the above, that’s a great example of when to use this function. Here’s the trace when shiny_error_recover is used, with the offending observer highlighted:<br>
<img src="https://codahosted.io/docs/tiv3E-sbAl/blobs/bl-GZroh69EXx/ff68c3ac672fd9e148b7bbd42f9e205798300a86ebc3e8534486628ba1383e27712ec6b2c6bde0e0a2abf9456bd6f8f0cfe247c17eb98314ee9e6e11e8f32127c1c45697069a59ffd7cd2296b6c65477ee40b707ffbba55ca55b7ee1aecb520244863289" alt="Screenshot 2023-04-27 at 4.44.43 PM.png"></p>
<p>Now you know where to look for the call that’s erroring! If you type in the final number shown, 55 in this case, you can open the error frame and examine the e object which will sometimes have a more informative message or traceback than what was shown in the R console. With these bits of information, no shiny error will escape you! Once you find the specific function that is erroring, that’s a great time to use <code>debugonce(function_name)</code> just before it’s called to open up a browser inside that specific function call.</p>
<h1 id="hidden-browser-buttons">Hidden browser buttons</h1>
<p>You can add a hidden browser button to any module that is proving especially error prone by inserting <code>shinyVirga::browser_ui()</code> in the UI where you want the hidden button to be, and <code>shinyVirga::browser_server()</code> anywhere in the server. This browser button will automatically print a statement with code necessary to run in the Javascript console when Debug mode is on that will reveal the browser button for you to click. When this browser opens in the R console, it will allow you to inspect inputs in states that you may otherwise not be able to get at with the typical R debugging tools.</p>

