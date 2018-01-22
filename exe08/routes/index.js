const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)

// router.get('/', (req,res)=>{
//     res.send('hello home')
// })

router.get('/', pagesController.home)
router.get('/about', pagesController.about)
router.get('/magasins/add', magasinsController.addMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)
router.post('/magasins/add',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)

module.exports = router