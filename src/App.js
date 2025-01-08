import "../src/css/App.css"
import {useNavigate, Route, Router, Routes} from "react-router-dom";
import Login from "./Login.js";
import Menu from "./Menu.js";
import Cadastro from "./Cadastro.js";
import Profile from "./Profile.js";
import React, {useEffect, useState} from 'react';
import api from "./Api.js";

function App() {


  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fazendo requisição para:', `${process.env.REACT_APP_API_URL}/users`);
    api.get('/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      });
  }, []);


  return (
      <Routes>
        {/* Tela de Login */}
        <Route path="/" element={<Login users={users}/>} />

        <Route path="/cadastro" element={<Cadastro/>}/>

        {/* Rota protegida: só acessível se autenticado */}
        <Route path="/menu" element={<Menu users={users}/>} />

        <Route path="/profile" element={<Profile users={users}/>}/>
      </Routes>
  );
}

export default App;
