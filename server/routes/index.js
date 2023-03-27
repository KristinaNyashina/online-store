const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//Объединяем все 4 роутера в один
router.use('/user', userRouter) // 1 парам. - юрл, 2 - сам роутер
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)



module.exports = router