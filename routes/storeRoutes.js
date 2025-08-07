const express = require("express")
const {postStore,updateStore} = require("../controllers/storeControllers")

const router = express.Router()

router.post('/',postStore)
router.put('/:store_location',updateStore)

module.exports = router