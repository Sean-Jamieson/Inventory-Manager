# Inventory-Manager
https://seans-inventory-manager.netlify.app/

Full Stack MERN Application for Inventory Management


## Client
### Actions
Defines actions that can be called within the form and item sections. 
Utilizes API calls and dispatches them to the reducers so that they can be distributed 
to various frontend components.
### API
implementation of backend functionality, first step in the front end chain to the backend functionality.
### Components
Forward facing React elements. seperated to increase modularity and reusability of code.
###Reducers
Redux reducer implementation. A switch statement that examines action types and returns unmodified 
object configurations, as per redux documentation.
## Server
### Controllers
Implementation of CRUD database functions with included error handling.
### Models
definition of acceptable data formating for a mongoDB database entry.
### Routes
routes controller CRUD functionality to the frontend. decoupling the controllers form the routing allows for
increased scalability should more functionality be required.
