Requisite reading:

-   [Engineering Production-Grade Shiny Apps: Conventions Matter](https://engineering-shiny.org/structuring-project.html#conventions-matter)
-   [Mastering Shiny - Shiny Modules](https://mastering-shiny.org/scaling-modules.html)
-   [Good walkthrough video of working through modules](https://www.youtube.com/watch?v=gGEY82qA3BI)

  

# Naming conventions

Virga Labs uses snakecase across our entire ecosystem for consistency. In large golem applications, it is important to maintain ease of search-ability and lookup in the package namespace (the [environment](https://adv-r.hadley.nz/environments.html) in which all of a package’s objects and functions reside. To do so, we use object oriented naming conventions to help segment functionality pertaining to particular application components.

For example, if we have two tabs in an app, one entitled “Introduction”, and one entitled “Explore”, then a nice naming convention might use the tab name as a prefix. For example, mod_intro might include the logic for the Introduction page UI/server logic. If intro has a workflow which asks the user a set of questions to determine their preferences, their might be a pseudo-module entitled pmod_intro_user_prefs . If we need a method to update those user preferences in a specific way, we might have a function entitled intro_user_prefs_update that’s defined in a file fct_intro_user_prefs_update. If the workflow used in pmod_intro_user_prefs has a number of small functional pieces then it might have an accompanying utils_intro_user_prefs which defines the small functional subunits used in the pseudo-module user preference’s workflow. The same pattern would follow for the Explore tab.

This allows other developers to jump into a project and when the they call the app namespace with app_name:: it’s intuitive for them to find the functions they’re looking for.

# Golem components

The golem framework and shinyVirga provides useful add_* functions that will create a file with a pre-made template for various kinds of components used in building an app.

## golem::add_module

The module is a unit of functionality in the application that has it’s own Javascript namespace, enabled by the ns function, which makes it such that its input and output objects only access the inputs/outputs defined within the module. The resulting file will always be prefixed by mod_  and should be named using conventions above adapted to the specific app’s context.

A contrived example derived from a template module is below:
```
#' test UI Function  
#'  
#' @description A shiny Module.  
#'  
#' @param id,input,output,session Internal parameters for {shiny}.  
#'  
#' @noRd   
#'  
#' @importFrom shiny NS tagList   
mod_test_ui <- function(id){  
 ns <- NS(id)  
 tagList(  
 actionButton(  
 ns("my_input"),  
 "My Button"  
 )  
 )  
}  
    
#' test Server Functions  
#'  
#' @noRd   
mod_test_server <- function(id){  
 moduleServer( id, function(input, output, session){  
 ns <- session$ns  
    
 observeEvent(input$my_input, {  
 # Do the thing  
 })  
 })  
}  
    
## To be copied in the UI  
# mod_test_ui("test_1")  
    
## To be copied in the server  
# mod_test_server("test_1")  
```
Note the ns function assigned in the ui and server components of the module. This ns function must be called on all inputIds in the UI portion and within any renderUI logic constructed by the server portion. The function will prefix the inputId with the Javascript namespace, which is a - separated string of the ids passed to each ancestor module in the call stack. The result of this is the logical separation of the input and outputs as you can see in the server portion where the ns(”my_input”) used in the UI allows the observer to be set on input$my_input even though there may be inputs entitled my_input elsewhere in the application.

A module is particularly useful for isolating a logical unit of functionality with a designated purpose with in app, such as rendering a series of prompts used to define a user preference.

The one drawback to module’s is their strength, the logical separation in the Javascript namespace.  
In some instances, a developer may wish to tuck a unit of functionality into a UI and server component without creating a new Javascript namespace such that the inputs and outputs are shared with the parent module. This is precisely what a pseudo-module was designed for.

## shinyVirga::add_pseudo_module

A pseudo-module works in much the same way as a module, but does not create a new Javascript environment so the inputs & outputs reside in the same namespace as the parent. A template is shown below:

#' test UI Function  
#' @description A shiny Module.  
#' @param .ns \code{fun} ns function. Typically found automatically.  
#' @noRd   
#' @importFrom shiny tagList   
pmod_test_ui <- function(.ns = shinyVirga::ns_find()){  
 ns <- force(.ns)  
 tagList(  
    
 )  
}  
    
#' test Server Functions  
#' @noRd   
pmod_test_server <- function(){  
 session <- shiny::getDefaultReactiveDomain()  
 ns <- session$ns  
 input <- session$input  
 output <- session$output  
    
}  
    
## To be copied in the UI  
# pmod_test_ui()  
    
## To be copied in the server  
# pmod_test_server()  

The usage of a pseudo-module is nearly identical to the module, but inputs & outputs in the pseudo-module are shared between the parent and the pseudo-module. This allows for developers to functionalize input components whose values must necessarily must be considered in confluence with one another. Using modules, the developer must keep track of shared inputs explicitly between modules using shiny::reactiveVal and/or shiny::reactiveValues and pass them as arguments to any nested modules. As a codebase changes, and inputs are added and removed, keeping track of where confluences of interactions are stored and updating arguments accordingly is cumulative technical debt. With pseudo-modules shared reactive inputs allow the developer to logically segment interactivity involving confluences of inputs as they see fit without incurring the technical debt of passing \code{\link[shiny]{reactiveVal}} and/or \code{\link[shiny]{reactiveValues}} around when interactions are removed or added.

## golem::add_fct

The add_fct function is used to create a template file for a function with a specific use case used elsewhere in the shiny app. Since our apps use hundreds of custom functions, we typically reserve this for large, highly app-specific function(s) pertaining to a particular set of functionality unique to the app. If we made one file for every function, the R folder would become very unruly and it would be very difficult to find the appropriate file one was searching for with a visual scan. These files are prefixed with fct_ and we know to look at these files for logic pertaining to specific components in the app.

## golem::add_utils

The add_utils function is used to create a template file for small function(s) or sets of relatively generalizable functions used elsewhere in the shiny app, that may also have the potential to be used in other shiny apps we build. We periodically scan utils files for functions that can be generalized to other projects, generalize them, and promote them to cross-repo use in one of our open-source repositories such as shinyVirga or virgaUtils. If you build a set of functions that can help out in more than just this specific app, or in numerous places in the app, a utils file is the appropriate place for them.
