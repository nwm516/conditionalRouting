#Conditional Routing in an Express NodeJS Server
This was for an assignment in my Web Applications & Development class to do as the title says.
#Running the Server
I have found two ways in going about this:

Altering package.json: Including a "type" : "module" designation, and then additionally "start": "node conditionalRoutingExpress.js" within the "scripts" identifier of the package.json file allowed me to run "conditionalRoutingExpress.js" without needing to alter the filename.

"node conditionalRoutingExpress.js" would successfully run the code with these alterations.

Running server as is: Running "conditionalRoutingExpress.js" as "conditionalRoutingExpress.mjs" allowed the program to proceed and the server to run successfully. Otherwise, importing express caused errors to occur, citing issues with importing modules from outside.

"node conditionalRoutingExpress.mjs" would successfully run the code with these alterations.
