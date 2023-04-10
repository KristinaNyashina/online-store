const ApiError = require ('../error/ApiError')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},// Первый параметр - центральная часть jwt токена
        process.env.SECRET_KEY,  // Второй = секретный ключ
        {expiresIn: '24h'}  //Продолжительность жизни токена, тк его могут похитить 
    )
}

class UserController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректно введенные данные')) //Если не введены
        }
        const candidate = await User.findOne({where: {email}})//Если совпадают с данными в базе
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5) //сколько раз хэшировать
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email,password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal('Пользователь с таким email не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json(token)
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
