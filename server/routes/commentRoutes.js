const router = require('express').Router()
const {getComments,addComment,deleteComment} = require('../handlers/commentHandler')

router.get('/',getComments)
router.post('/',addComment)
router.delete('/:id',deleteComment)

module.exports = router