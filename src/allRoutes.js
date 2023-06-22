var express = require("express");
var router = express.Router();
const openapi = require('./openapi');
// const multer = require("multer");
// const os = require('os');
const {upload} = require('../src/common/filehelpers');
// const upload = multer({ dest: os.tmpdir() });
router.post('/createtransaction',
upload.single("file"),
openapi.convertAudioToText);
router.post('/createChatCompletion',openapi.createChatCompletion);
router.post('/sendFinalResult',openapi.createFinalResults);

module.exports = router;