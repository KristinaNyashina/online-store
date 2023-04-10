const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

router.post('/', brandController.create) //Для создания бренда
router.get('/', brandController.getAll) //Для получения бренда
router.delete('/', brandController.delete) //Для удаления бренда




module.exports = router