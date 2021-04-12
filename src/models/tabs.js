const mongoose = require('mongoose');

const tabsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a name to this Tab'],
        maxlength: 50
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    dataPoints: [], // as datapoints can be selection, text so make it as flexible
    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

// Prevent user from creating multiple
tabsSchema.index({ name: 1 }, { unique: true });

tabsSchema.pre('save', async function(next) {
 // further sanitize and clean the data here 
 // before insertion
});

module.exports = mongoose.model('tabs', tabsSchema);
