const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    application_id: {
      require:true,
      type: Number
    },
    questions:[
     {
        question:{
            required: true,
            type: String
        },
        skill:{
            required: true,
            type: String
        },
        level:{
            required: true,
            type: String
        },
        answer:{
            required: true,
            type: String
        },
        score:{
            required: true,
            type: Number
        }
     }
    ],
    overall_score: {
        required: true,
        type: Number
    },
    remarks: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Results', dataSchema)