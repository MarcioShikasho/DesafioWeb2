import React from "react";
import './Card.css';
import { json } from "react-router-dom";

function Card(props) {

    const excluir = () => {
        console.log('Excluindo Cadastro')
        const cadastros = JSON.parse(localStorage.getItem("vaga"))
        const cadastroComExclusao = cadastros.filter((c) => c.PlacaVeiculo !== props.cadastro.PlacaVeiculo)
        localStorage.setItem("vaga", JSON.stringify(cadastroComExclusao))
        window.dispatchEvent(new Event("alteracaoCadastro"))
    }

    return (
            <div className="background">
                <h3 className="nomePessoa">{props.cadastro.nome}</h3>
                <p className="content"><span>Placa: </span>{props.cadastro.PlacaVeiculo}</p>
                <p className="content"><span>Número da vaga: </span>{props.cadastro.NumeroVaga}</p>
                <p className="content"><span>Número do Apartamento: </span>{props.cadastro.NumeroApartamento}</p>
                <p className="content"><span>Bloco do Apartamento: </span>{props.cadastro.BlocoApartamento}</p>
                <div className="botoes">
                    <button onClick={excluir}>Excluir</button>
                </div>
            </div>
    )
}

export default Card;