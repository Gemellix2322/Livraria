import logo from './logo.svg';
import './App.css';
import {useNavigate, Route, Router, Routes} from "react-router-dom";
import Login from "./Login.js";
import Menu from "./Menu.js";
import React, {useState} from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <Routes>
        {/* Tela de Login */}
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Rota protegida: só acessível se autenticado */}
        <Route
          path="/menu"
          element={
            <Menu/>
          }
        />
      </Routes>
  );
}

export default App;
