const express = require("express");
const {chatWithGenAI} = require('../controllers/chatController')

const router = express.Router();
// console.log("chatroute.js")
router.route("/ai-chat").post(chatWithGenAI)


module.exports = router;