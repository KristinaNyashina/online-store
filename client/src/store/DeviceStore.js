import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name:'Холодильники'},
            {id: 2, name:'Смартфончик'}
        ]
        this._brands = [
            {id: 1, name:'Samsung'},
            {id: 2, name:'Apple'}
        ]
        this._device = [
            {id: 1, name:'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.yandex.net/get-music-feed-promotion/59901/64351ee85bd6a11eed2f4816-landing.image/orig`}, 
            {id: 2, name:'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.yandex.net/get-music-feed-promotion/59901/64351ee85bd6a11eed2f4816-landing.image/orig`}, 
            {id: 3, name:'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.yandex.net/get-music-feed-promotion/59901/64351ee85bd6a11eed2f4816-landing.image/orig`},
            {id: 4, name:'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.yandex.net/get-music-feed-promotion/59901/64351ee85bd6a11eed2f4816-landing.image/orig`} 
        ]
        //Следит за изменениями, компоненты будут перерендериваться.
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    //Одноименные геттеры для того, чтобы получать какие-либо переменные из состояния
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}