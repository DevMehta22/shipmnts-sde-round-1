const express = require("express")
const {calculatePrice} = require("../controllers/calculateControllers")

const router = express.Router()

router.post('/',calculatePrice)


module.exports = router