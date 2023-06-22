const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const constants = require('../src/common/constants');
let fs = require('fs');
const Results = require('./schemas/createFinalEvaluation');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_WHISPER_API_KEY,
  });
  const openai = new OpenAIApi(configuration);


module.exports.convertAudioToText = async (req,res) => {
    let file = req.files;
    console.log('filesss',file);
 try {
    const resp = await openai.createTranscription(
        fs.createReadStream(file[0].path),
        "whisper-1"
      );
    res.status(200).json({
        message: resp.data.text,
        status:200
    })
 } catch (error) {
    console.log('eerrr',error);
    res.status(500).json({
        error:"error response",
        status:500
    })
 }
}


module.exports.createChatCompletion = async (req,res) => {
    let {systemPrompt,messages} = req.body;
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": systemPrompt},
                ...messages],
          });
        res.status(200).json({
            message:completion.data.choices[0].message.content,
            status:200
        })
     } catch (error) {
        res.status(500).json({
            error:"error fetching response",
            status:500,
            message:error
        })
     }
}

module.exports.createFinalResults = async (req,res) => {
  let data = req.body;
  console.log('dataa',data);
  const db = new Results(data);
  try {
    const dataToSave = await db.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({
        error: error,
        status:500
    })
  }
}
