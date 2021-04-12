const tabsModel = require('./models/tabs');
const logger = require('./middleware/logger');

module.exports.getAll = async () => {
    const response = {
        data: [],
        error: null
    }
    try {
        const allTabsRecords = await tabsModel.find();
        response.data = allTabsRecords;
        return response;
    }
    catch (error) {
        //exception can be of database unavailability 
        //or any other error
        // use the logger middelware here to register the log
        response.error = "exception_occurred";
        return response;
    }
};

module.exports.add = async (dataToAdd) => {
    const response = {
        data: null,
        error: null
    }
    try {
        const newTabRecord = await tabsModel.create(dataToAdd);
        response.data = newTabRecord; //send the newly added tab record
        return response;
    }
    catch (error) {
        //exception can be of uniqueness error
        //exception can be of database unavailability 
        //or any other error
        // use the logger middelware here to register the log
        response.error = "exception_occurred";
        return response;
    }
};

module.exports.update = async (id, dataToUpdate) => {
    const response = {
        error: null
    }
    try {
        const updateRecord = await tabsModel.updateOne(
            {
                _id: id,
            },
            {
                $set: dataToUpdate
            }
        );
        if (updateRecord === 1) {
            re
        }
        return response; //send the newly added tab record
    }
    catch (error) {
        //exception can be of uniqueness error
        //exception can be of database unavailability 
        //or any other error

        // use the logger middelware here to register the log
        response.error = "exception_occurred";
        return response;
    }
};

module.exports.deleteTab = async (id) => {
    const response = {
        error: null
    }
    try {
        await tabsModel.deleteOne(
            {
                _id: id,
            }
        );
        return response;
    }
    catch (error) {
        //exception can be of database unavailability 
        //or any other error
        // use the logger middelware here to register the log
        response.error = "exception_occurred";
        return response;
    }
};