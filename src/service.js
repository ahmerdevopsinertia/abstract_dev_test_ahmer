module.exports.getAllTabs = (req, res) => {
    const response = {
        data: [],
        message: "All Tabs",
        error: null
    }
    return res.send(response);
};