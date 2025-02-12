const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res ){
        const {name} = req.body //Извлекаем из тела запроса название типа
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req, res ){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete(req, res ){
    }
}

module.exports = new BrandController()
