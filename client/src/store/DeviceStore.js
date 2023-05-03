import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name:'Холодильникчи'},
            {id: 2, name:'Телевизики'},
            {id: 3, name:'Ноутбучки'},
            {id: 4, name:'Смартфончики'}
        ]
        this._brands = [
            {id: 1, name:'Samsung'},
            {id: 2, name:'Apple'},
            {id: 3, name:'Lenovo'},
            {id: 4, name:'Huawei'}
        ]
        this._devices = [
            {id: 1, name:'Iphone 12 pro', price: 25000, rating: 5, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`}, 
            {id: 2, name:'Iphone 12 pro', price: 26000, rating: 3, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`}, 
            {id: 3, name:'Iphone 12 pro', price: 27800, rating: 1, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`},
            {id: 4, name:'Iphone 12 pro', price: 38000, rating: 5, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`}, 
            {id: 5, name:'Iphone 12 pro', price: 90000, rating: 5, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`},
            {id: 6, name:'Iphone 12 pro', price: 254000, rating: 5, img: `https://i.pinimg.com/736x/89/fd/8a/89fd8a1f0956f1c9b450aca78894e14f.jpg`} 
        ]
        //Следит за изменениями, компоненты будут перерендериваться.
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    //Одноименные геттеры для того, чтобы получать какие-либо переменные из состояния
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}

