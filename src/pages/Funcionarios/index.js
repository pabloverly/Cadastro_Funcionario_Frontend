import React, { useState, FormEvent , useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import FuncionariosItens, { IFuncionarios } from '../../components/FuncionariosItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function FuncionariosList() {
  const [dados, setDados] = useState([]);
    const [id, setId] = useState('');


  // const history = useHistory();
  // const username = localStorage.getItem('login');

  // if (username === null)
  //   {
  //     history.push('/login');
  //   }


  useEffect(() => {
    api.get('SelectController').then(response => {         
    const informacao = response.data;     
    setDados(informacao);        
    })
  }, []);



  async function searchfuncionarios() {
   

    const response = await api.get('SelectController'
    // , {
    //   params: {
    //     local       
    //   }
    // }
    );

    setDados(response.data);
  }
  async function handleExcluir(props){

    alert (id )
    // const response = await api.get('DeleteController'
    // , {
    //   params: {
    //     id       
    //   }
    // }
    // );
  }

  return (
    <div id="page-funcionario-list" className="container">
      <PageHeader title="Lista de Cadastros.">
        {/* <form id="search-funcionarios" onSubmit={searchfuncionarios}>
    
          <Input 
            type="local" 
            name="local" 
            label="Setor"
            value={local}
            onChange={(e) => { setLocal(e.target.value) }}
          />          
          <button type="submit">
            Buscar
          </button>
        </form> */}
      </PageHeader>

      <main>
        {dados.map((info) => {
          // return <FuncionariosItens key={funcionario.id}  />;
          return (
          // <div><h1>{info.NOME}</h1></div>
            <>
           
              <Input 
              name="id" 
              label="ID"               
              value={info.ID}
              onChange={(e) => { setId(e.target.id) }}              
            />
                <Input 
              name="nome" 
              label="Nome"          
              value={info.NOME}
              onChange={(e) => { setId(e.target.NOME) }}              
            />
                <Input 
              name="CPF" 
              label="CPF"              
              value={info.CPF}
              onChange={(e) => { setId(e.target.CPF) }}              
            />

              {/* <button              
              className='button'
              label="Excluir" 
              type='button'              
              onClick={(e)=>alert(e.target.value)}
            /> */}


            <br/>
              <hr /><hr />
            
          </>
          )
        })}
      </main>

      {/* <main>
        {dados.map((funcionario: IFuncionarios) => {
          return <FuncionariosList key={funcionario.id}  />;
        })}
      </main> */}

    </div>
  )
}

export default FuncionariosList;