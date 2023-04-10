const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create) 
router.get('/', deviceController.getAll) 
router.get('/:id', deviceController.getOne) //Получаем ийди отдельного устройства после перехода на его страницу с инфо




module.exports = router