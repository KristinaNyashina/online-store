import React from "react";
import {Container, Form, Card, Button} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)


    return(
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 480}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>

                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введите ваш email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        variant={"outline-success"}
                    />
                    <Button className="mt-3" variant={"outline-success"}>
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    {isLogin ? 
                        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                            Нет аккаунта? <NavLink to = {REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                        </div>
                        :
                        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                        Уже есть аккаунт? <NavLink to = {LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                    }
                    
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;