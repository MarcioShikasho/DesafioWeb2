import React, { useEffect, useState } from "react";
import './TelaListar.css';
import Card from '../components/Card';


function TelaListar() {
    const [cadastros, setCadastros] = useState([]);

    const carregarCadastros = () => {
        const cadastrosCarregados = JSON.parse(localStorage.getItem("vaga"))
        setCadastros(cadastrosCarregados)
    }

    useEffect(() => {
        carregarCadastros()
        window.addEventListener("alteracaoCadastro", carregarCadastros)
        return () => {
            window.removeEventListener("alteracaoCadastro", carregarCadastros)
        } 
    }, []);

    return (
        <div>
            <h2>Vagas Cadastradas</h2>

            <div className="div-listar">
                {
                    cadastros.length > 0 ? (
                        cadastros.map((c) => <Card cadastro={c} />)
                    ) : (
                        <p className="alternativo">Não há vagas cadastradas</p>
                    )
                }   
            </div>
        </div>
    )
}

export default TelaListar;