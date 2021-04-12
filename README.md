# abstract_dev_test_ahmer

Abstract Dev Test Ahmer

Microservice to handle the business process of CRUD operatons for the Tabs feature. The resources that are used for this Microservice are
NodeJS, Express JS and MongoDB's package mongoose

# Directory and Files info

index.js => The entry point which handles the express app server, database, host and port setup 
app.js => Handles the express setup
router.js => Handles the API requests
endpoint directory -> Validates each API endpoints and connect with the respective service
service.js => Handles the business logic of the APIs
models->tabs => Handles the database layer logic
middleware-> requestValidation.js => Handles the validation of the request payload
middleware-> errorHandler.js => Handles the exception messages from all the APIs
middleware-> authorization.js => Handles the authorization of the APIs
middleware-> logger.js => Handles the logs of the APIs
config->config.env => Handles the env. variables
config->db.js => Creates the database connection
test => The Test directory handles the Test Cases
constants.js => Stores the constants if needed

We can use the any lint library to configure the linter which helps in maintaining the code standards as well as uniformality in writing the source code

# To Test these APIs 

# Use the Insomnia API Testing tool collection attached in the email

# We can use docker to host this microservice as well

# We can use mocha or sinon like libraries to write the Unit Tests of each layer that is endpoint, service and model

# For this Test database is host at Atlas MongoDB server
mongodb+srv://sehat_guide:3Gt8mCZ8FhfnWgME@cluster0-c73fg.mongodb.net/abstract_dev_test?retryWrites=true&w=majority