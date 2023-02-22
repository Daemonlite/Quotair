const router = require('express').Router()
const {getContents,createPost,updatePost,deleteContent} = require('../handlers/contentHandler')

router.get('/',getContents)
router.post('/',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deleteContent)

module.exports = router