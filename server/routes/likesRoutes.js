const router = require('express').Router()
const {getLikes,like,unlike} = require('../handlers/likesHandler')

router.get('/',getLikes)
router.post('/',like)
router.delete('/:id',unlike)


module.exports = router