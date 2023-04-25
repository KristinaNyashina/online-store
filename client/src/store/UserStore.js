import {makeAutoObservable} from 'mobx';

export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        //Следит за изменениями, компоненты будут перерендериваться.
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    //Одноименные геттеры для того, чтобы получать какие-либо переменные из состояния
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}