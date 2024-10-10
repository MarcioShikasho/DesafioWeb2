import React from 'react';
import {Link, Routes} from 'react-router-dom'
import './Header.css';

function Header(){
    return (
        <header>
            <h1>Sistema de Cadastro e Consulta de Vagas</h1>
            <ul>
            <li><Link to='/Cadastro'>Cadastro de Vagas</Link></li>
            <li><Link to="/Listar">Vagas Cadastradas</Link></li>
            </ul>
        </header>
    )
}
export default Header;