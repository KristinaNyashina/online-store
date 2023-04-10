const sequelize = require('../db')
const {DataTypes} = require('sequelize')  // Имортируем из библиотеки класс, которй коможет нам описать типы поля

//Далее описываем модели

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},  
    /*autoIncrement - при создании они будут автоматически рассчитываться (1, 2, 3),
    ,PrimaryKey используется для хранения уникальных идентификаторов объектов, которые перечислены в таблице, например, это может быть ID клиента или товара*/
    email: {type: DataTypes.STRING, unique: true}, //Уникальный
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"} //По дефолту всегдазаходит как User
})


const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true}  //autoIncrement - при создании они будут автоматически рассчитываться (1, 2, 3)
//Должно быть user_id, но sequelize подставит их сам, когда будем описывать типы связей, поэтому на внешние ключи мы не обращаем внимания.
})

const BasketDevice = sequelize.define('busket_device', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true} 
    //Device_id
    //Basket_id 
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, //Атрибут allowNull указывает, допускает ли поле отсутствие значение.  
    price: {type: DataTypes.INTEGER, allowNull: false},
    rathing: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
    //Type_id
    //Brand_id
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
})//Создаем связующую модель



User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
DeviceInfo.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice) //Че
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as : 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand} ) //Создается промежуточная таблица с информацией какой тип принадлежит какому бренду и наоборот.
Brand.belongsToMany(Type, {through: TypeBrand} )


module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}

