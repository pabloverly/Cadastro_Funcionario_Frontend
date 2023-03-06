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
  const [local, setLocal] = useState('');
 

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



  async function searchTeachers() {
   

    const response = await api.get('SelectController'
    // , {
    //   params: {
    //     local       
    //   }
    // }
    );

    setDados(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Lista de Cadastros.">
        {/* <form id="search-teachers" onSubmit={searchTeachers}>
    
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
              <ul>
              <li>{info.ID}</li>
              <li>{info.NOME}</li>
              <li>{info.CPF}</li>
              <li><hr></hr></li>
              
            </ul>
          </>
          )
        })}
      </main>

      {/* <main>
        {dados.map((teacher: IFuncionarios) => {
          return <FuncionariosList key={teacher.id}  />;
        })}
      </main> */}

    </div>
  )
}

export default FuncionariosList;