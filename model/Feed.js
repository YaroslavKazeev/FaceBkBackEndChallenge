const moment = require('moment/moment');
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const FEED = new schema({
    title:{
        type:String,
        required: true,
        maxLength: 15,
    },

    text:{
        type:String,
        required: true,
        maxLength: 40,
    },

    create_at:{
        type: Date,
        default: Date.now,
        get: function(createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Feed', FEED)