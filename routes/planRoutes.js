const express = require("express")
const {postPlan,getPlan} = require("../controllers/planControllers")

const router = express.Router()

router.post('/',postPlan)
router.get('/:plan_id',getPlan)

module.exports = router