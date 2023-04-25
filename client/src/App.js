import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    // Оборачиваем в браузер роутер, чтобы навигация по странице была взможна
    <BrowserRouter> 
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
