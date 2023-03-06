import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';


import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function Form() {
  const history = useHistory();

  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [DataAdmissao, setDataAdmissao] = useState('');
  const [UltilizaVT, setUltilizaVT] = useState('');
  const [DataCadastro, setDataCadastro] = useState('');
  const [DataAlteracao, setDataAlteracao] = useState('');
  const [DataExclusao, setDataExclusao] = useState('');


  const username = localStorage.getItem('login');

  // if (username === null)
  //   {
  //     history.push('/login');
  //   }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

  //  alert(Nome+    CPF+    DataAdmissao+    UltilizaVT+    DataCadastro+    DataAlteracao+    DataExclusao )

    api.post('InsertController', {      
      Nome,
      CPF,
      DataAdmissao,
      UltilizaVT,
      DataCadastro,
      DataAlteracao,
      DataExclusao          
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    })

  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Cadastro de Funcionario"
        description="Formulatio para cadastramento de funcionarios"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Dados</legend>

            <Input 
              name="nome" 
              label="nome" 
              value={Nome}
              onChange={(e) => { setNome(e.target.value) }}
            />

            <Input 
              name="CPF" 
              label="CPF"
              value={CPF}
              // maxLength={11}
              onChange={(e) => { setCPF(e.target.value) }}
            />

            <Input 
              name="DataAdmissao" 
              label="DataAdmissao"
              value={DataAdmissao}
              placeholder='dd/mm/yyyy'
              onChange={(e) => { setDataAdmissao(e.target.value) }}
            />

            <Input 
              name="UltilizaVT" 
              label="UltilizaVT"
              placeholder='S ou N'
              value={UltilizaVT}
              onChange={(e) => { setUltilizaVT(e.target.value) }}
            />
            
            <Input 
              name="DataCadastro" 
              label="DataCadastro"
              value={DataCadastro}
              placeholder='dd/mm/yyyy'
              onChange={(e) => { setDataCadastro(e.target.value) }}
            />     
             <Input 
              name="DataAlteracao" 
              label="DataAlteracao"
              placeholder='dd/mm/yyyy'
              value={DataAlteracao}
              onChange={(e) => { setDataAlteracao(e.target.value) }}
            />   
             <Input 
              name="DataExclusao" 
              label="DataExclusao"
              value={DataExclusao}
              placeholder='dd/mm/yyyy'
              onChange={(e) => { setDataExclusao(e.target.value) }}
            />     

          </fieldset>     

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Form;