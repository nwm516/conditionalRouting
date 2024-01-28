# Conditional Routing in an Express NodeJS Server
This was for an assignment in my Web Applications & Development class to do as the title says.
# Running the Server
I have found two ways in going about this:

<ins>Altering package.json:</ins> Including a "type" : "module" designation, and then additionally "start": "node conditionalRoutingExpress.js" within the "scripts" identifier of the package.json file allowed me to run "conditionalRoutingExpress.js" without needing to alter the filename.

"node conditionalRoutingExpress.js" would successfully run the code with these alterations.

<ins>Running server as is:</ins> Running "conditionalRoutingExpress.js" as "conditionalRoutingExpress.mjs" allowed the program to proceed and the server to run successfully. Otherwise, importing express caused errors to occur, citing issues with importing modules from outside.

"node conditionalRoutingExpress.mjs" would successfully run the code with these alterations.
# Implementation of Conditional Routing
Through the use of Math.random() and next() methods, I have allowed the use of alternate outcomes through the /foo path. Math.random() assigns a value to a variable named "random", which evaluates to either 0 or 1. If random is less than 0.5, the block within the if statement runs. Otherwise, the else statement calls upon next(), allowing for the next instance of the /foo path to run, throwing the alternate text of "and sometimes that" to run.  
