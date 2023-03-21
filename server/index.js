require('dotenv').config()
const express = require('express') // require импортирует модуль экспресс
const sequelize = require('./db')

const PORT = process.env.PORT || 5000

const app = express() // Создание объекта, с которого будет производиться запуск приложения

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