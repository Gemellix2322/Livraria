import "../src/css/Menu.css";
import LivrodoDia from "./LivrodoDia.js";
import Logo from "../src/img/Logo.png";
import { Link } from "react-router-dom";
import Livros from "./Livros.js";
import { useState } from "react";
import { FiUser } from "react-icons/fi";



const Menu = ({users}) => {
    const [livro, useLivro] = useState([
        {
            name: "Da certo",
            description: "Finalmente",
            image: require("./img/download.jpg"),
        },
        {
            name: "Por favor",
            description: "Finalmente",
            image: require("./img/images.jpg"),
        },
        {
            name: "AAAAAAAA",
            description: "Finalmente",
            image: require("./img/capa.jpg"),
        },
        {
            name: "AEEEEEEEE",
            description: "Finalmente",
            image: require("./img/vermelho.jpg"),
        },
        
    ]);
    return (
        <div className="Menu">
            <header className="App-header-menu">
                <Link to={'/profile'}className="link-profile"><FiUser className="profile"/></Link>
                <Link to={'https://www.instagram.com/gemellicafes/'}><img src={Logo} alt="Logo" className="Logo"/></Link>
                <h1>`Bem-vindo ${users.username}´</h1>
            </header>
            <div className="App-container">
                <h1>Livros Disponiveis</h1>
                <div>
                     <LivrodoDia livro={livro}/>
                </div>
                <div>
                    <Livros livro={livro}/>
                </div>

            </div>
        </div>
    );
}

export default Menu;