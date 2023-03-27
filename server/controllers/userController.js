class UserController {
    async registration(req, res ){
        
    }
    async login(req, res ){
        
    }
    async check(req, res ){
        const query = req.query  //Параметры строки запроса
        res.json(query.id)
    }
}

module.exports = new UserController()
