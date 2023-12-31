var express = require("express");
var router = express.Router();
const openapi = require('./openapi');
// const multer = require("multer");
// const os = require('os');
const { upload } = require('../src/common/filehelpers');
// const upload = multer({ dest: os.tmpdir() });
router.post('/createtransaction',
    upload.single("file"),
    openapi.convertAudioToText);
router.post('/createChatCompletion', openapi.createChatCompletion);
router.post('/candidate/:id', openapi.createChatCompletionById);
router.post('/sendFinalResult', openapi.createFinalResults);
router.post('/createOnlineTest', openapi.createOnlineTest);
router.get('/getPromptMessage/:id', openapi.getPromptMessage);
router.put('/updateEmail/:id', openapi.updateEmailId);
router.put('/updateUserMessages/:id', openapi.updateUserMessages);
router.get('/getAllUserInfo', openapi.getAllUserInfo);
router.get('/getCodeEditorStatus', openapi.getCodeEditorStatus);
module.exports = router;