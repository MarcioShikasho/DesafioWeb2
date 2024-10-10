import React, { useState } from 'react';
import './TelaCadastro.css';
import CustomInput from '../components/CustomInput';

function TelaCadastro() {
    const [dados, setDados] = useState(
        { 
            nome: "",
            NumeroApartamento: "",
            BlocoApartamento: "",
            PlacaVeiculo: "",
            ModeloVeiculo: "",
            Cor: "",
            NumeroVaga: ""    
        }
    )

    const handleInput = (event) => {
        const {name, value} = event.target
        setDados({...dados, [name]: value})
    }

    const salvar = () => {
        const vagas = JSON.parse(localStorage.getItem("vaga")) || []
        vagas.push(dados)
        localStorage.setItem("vaga", JSON.stringify(vagas))
        alert("Cadastro Realizado com Sucesso!")
        console.log(dados)
        limpar()
    }

    const limpar = () => {
        setDados(
            {
                nome: "",
                NumeroApartamento: "",
                BlocoApartamento: "",
                PlacaVeiculo: "",
                ModeloVeiculo: "",
                Cor: "",
                NumeroVaga: "" 
            }
        )
    }

    return (
        <div>
            <h2 className='title-Cadastro'>Cadastro de Vagas</h2>
            <fieldset>
            <CustomInput classe="form"
                         label="Nome Completo:"
                         tipo="text"
                         placeholder="Digite seu nome completo"
                         value={dados.nome}
                         handleInput={handleInput}
                         name="nome" />

            <CustomInput classe="form"
                         label="Numero do Apartamento"
                         tipo="number"
                         placeholder="Digite numero do apartamento"
                         value={dados.NumeroApartamento}
                         handleInput={handleInput}
                         name="NumeroApartamento" />  

            <CustomInput classe="form"
                         label="Bloco do Apartamento"
                         tipo="text"
                         placeholder="Digite o Bloco do apartamento"
                         value={dados.BlocoApartamento}
                         handleInput={handleInput}
                         name="BlocoApartamento" />

            <CustomInput classe="form"
                         label="Placa do Veículo"
                         tipo="Text"
                         placeholder="Digite a placa do Veículo"
                         value={dados.PlacaVeiculo}
                         handleInput={handleInput}
                         name="PlacaVeiculo" />      

            <CustomInput classe="form"
                         label="Modelo do Veículo"
                         tipo="Text"
                         placeholder="Digite a placa do Veículo"
                         value={dados.ModeloVeiculo}
                         handleInput={handleInput}
                         name="ModeloVeiculo" />      
 
            <CustomInput classe="form"
                         label="Cor do Veículo"
                         tipo="Text"
                         placeholder="Digite a cor do Veículo"
                         value={dados.Cor}
                         handleInput={handleInput}
                         name="Cor" />               

            <CustomInput classe="form"
                         label="Número da Vaga do Estacionamento"
                         tipo="Text"
                         placeholder="Digite o número da Vaga"
                         value={dados.NumeroVaga}
                         handleInput={handleInput}
                         name="NumeroVaga" />        
            <div className='div-button'>
                <button className='button' onClick={salvar}>Salvar</button>    
                <button className='button' onClick={limpar}>Limpar</button>     
            </div>
            </fieldset>                 
        </div>
    )
}

export default TelaCadastro
