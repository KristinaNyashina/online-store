require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT =process.env.PORT || 5000
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index') //Экспорт и ниже вызов
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express() // Создание объекта, с которого будет производиться запуск приложения
app.use(cors())
app.use(express.json()) // Для чтого чтобы парсило джсон формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router) //1 парам - юрл по которому роутер обрабатывается, 2 - сам роутер


app.use(errorHandler) // Обработчик ошибок пихаем в самый конец

const start = async () => {
    try{
        await sequelize.authenticate() //Устанавливает подключение к бд
        await sequelize.sync() //Сверяет состояние бд со схемой бд
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))  // Порт, который должен прослушивать наш сервер => вывод на консоль сообщения
    } catch(e){
        console.log(e);
    }
}

start()