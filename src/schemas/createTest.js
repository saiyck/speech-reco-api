const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    promptMessage: {
      require:true,
      type: String
    }
})

module.exports = mongoose.model('TestSchema', dataSchema)