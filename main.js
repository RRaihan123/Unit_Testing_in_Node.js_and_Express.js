const express = require("express")
const { index, hello } = require("./default")

const router = express.Router();

router.get('/', index);
router.get('/hello/:name', hello);

module.exports=router;