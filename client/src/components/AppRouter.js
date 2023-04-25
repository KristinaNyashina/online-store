//Логика навигации по страницам
import React, {useContext} from "react";
import {
    Routes,
    Route
  } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import {Navigate} from 'react-router-dom';
import { Context } from "../index";

const AppRouter = () => {
    
    const {user} = useContext(Context)

    console.log(user)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            //В качестве ключа указываем путь, так как подразумевается, что у каждой страницы он уникален
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            {publicRoutes.map(({path, Component}) =>

                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            <Route path="*" element={ <Navigate to={SHOP_ROUTE} /> } />
        </Routes>
    )
}

export default AppRouter;