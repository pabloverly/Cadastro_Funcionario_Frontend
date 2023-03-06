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
    const [ids, setId] = useState('');


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
    );

    setDados(response.data);
  }
  async function handleExcluir(id){

    const response = await api.post('DeleteController'
    ,{id})
    alert('Excluido com sucesso!');

    const dados = await api.get('SelectController'
  
    );

    setDados(dados.data);
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

      <main >
        {dados.map((info) => {
          // return <FuncionariosItens key={funcionario.id}  />;
          return (
          // <div><h1>{info.NOME}</h1></div>
            <>
           <div className='box'>
              <div className=''>
                    <Input 
                      name="id" 
                      label="ID"               
                      value={info.ID}
                      onChange={(e) => { setId(e.target.id) }}  
                      disabled="true"            
                    />
                        <Input 
                      name="nome" 
                      label="Nome"          
                      value={info.NOME}
                      onChange={(e) => { setId(e.target.NOME) }}  
                      disabled="true"                 
                    />
              </div>
              <div className=''>
                <Input 
                name="CPF" 
                label="CPF"              
                value={info.CPF}
                onChange={(e) => { setId(e.target.CPF) }}
                disabled="true"                   
              />
                <Input 
                name="FUNCAO" 
                label="FUNCAO"              
                value={info.FUNCAO}             
                onChange={(e) => { setId(e.target.FUNCAO) }}   
                disabled="true"                
                />
              </div>
                <div>
                    <Input 
                      name="ValeTransporte" 
                      label="ValeTransporte"              
                      value={info.ULTILIZAVT}
                      onChange={(e) => { setId(e.target.ULTILIZAVT) }}   
                      disabled="true"                
                    />
                    <Input className='button'
                      lassName='button' 
                      label="Exluir" 
                      value='Excluir' 
                      onInput={e => setId(e.target.value)}type='button' 
                      onClick={()=> handleExcluir(info.ID)} 
                    /> 
               
              </div>
             </div>

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