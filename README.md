# abstract_dev_test_ahmer
Abstract Dev Test Ahmer

Microservice to handle the business process of CRUD operatons for the Tabs feature

# Directory and Files info

server.js => Handles the database, host and port setup 
app.js => Handles the express setup
router.js => Handles the API requests
service.js => Handles the business logic of the APIs
models->tabs => Handles the database layer logic
middleware-> error.js => Handles the exception messages from all the APIs
middleware-> authorization.js => Handles the authorization of the APIs
middleware-> logger.js => Handles the logs of the APIs
config->config.env => Handles the env. variables
config->db.js => Creates the database connection
test => The Test directory handles the Test Cases
constants.js => Stores the constants if needed

