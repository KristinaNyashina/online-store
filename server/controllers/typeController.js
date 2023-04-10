const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res ){
        const {name} = req.body //Извлекаем из тела запроса название типа
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req, res ){
        const types = await Type.findAll()
        return res.json(types)
    }

    async relete(req, res ){
    }
}

module.exports = new TypeController()
