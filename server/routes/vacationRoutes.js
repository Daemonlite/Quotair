const router = require('express').Router()
const {getVacationSpots,addVacations,updateVactionInfo,deleteVacation} = require('../handlers/vacationHandler')

router.get('/',getVacationSpots)
router.post('/',addVacations)
router.put('/:id',updateVactionInfo)
router.delete('/:id',deleteVacation)

module.exports = router
