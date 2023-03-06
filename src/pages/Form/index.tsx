import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';


import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function Form() {
  const history = useHistory();
  const [Cargo, setCargo] = useState('');
  const [Nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [DataAdmissao, setDataAdmissao] = useState('');
  const [UltilizaVT, setUltilizaVT] = useState('N');
  const [DataCadastro, setDataCadastro] = useState('');
  const [DataAlteracao, setDataAlteracao] = useState('');
  const [DataExclusao, setDataExclusao] = useState('');
  const [ckVT, setCkVt] = useState(false);


  
  function handleCreateClass(e: FormEvent) {
    e.preventDefault();


    api.post('InsertController', {      
      Nome,
      CPF,
      DataAdmissao,
      UltilizaVT,
      DataCadastro,     
      DataAlteracao,
      DataExclusao ,
      Cargo,        
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('Home');
    }).catch(() => {
      alert('Erro no cadastro!');
    })

  }

  function formataData(dataInput: string){
    let data = dataInput.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');;
    return data
  }
  function handleCheck (){
    if (ckVT) {
      setCkVt(false)
    setUltilizaVT('N')
    }
    else {
      setCkVt(true)
      setUltilizaVT('S')
    }
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
              name="cargo" 
              label="cargo" 
              value={Cargo}
              required
              onChange={(e) => { setCargo(e.target.value) }}
            />

            <Input 
              name="nome" 
              label="nome" 
              value={Nome}
              required
              onChange={(e) => { setNome(e.target.value) }}
            />

            <Input 
              name="CPF" 
              label="CPF"
              value={CPF}
              required              
              maxLength={11}
              
              onChange={(e) => { setCPF(e.target.value) }}
            />

            <Input 
              name="DataAdmissao" 
              label="DataAdmissao"
              value={DataAdmissao}
              required
              // type="date"
              data-mask="00/00/0000"
              placeholder='dd/mm/yyyy'
              className="form-control" 
              onChange={(e) => { setDataAdmissao(e.target.value) }}
            />
        
        
            <br/>
            <label>UltilizaVT</label>
            <input type='checkbox' checked={ckVT} onClick={()=>{handleCheck()}}></input>

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