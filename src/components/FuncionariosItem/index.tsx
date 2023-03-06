import React from 'react';

import whatsappIcon from '../../assets/images/icons/excluir.png';
import api from '../../services/api';

import './styles.css';


export interface IFuncionarios {
  Id?: number;
  Nome?: string;
  CPF?: string;
  DataAdmissao?: string;
   UltilizaVT?: string;
   DataCadastro?: string;
   DataAlteracao?: string;
   DataExclusao?: string;

  id?: number;
  avatar?: string;
  grupo?: string;
  telefone?: number;
  local?: string;
  ramal?: string;
}

interface FuncionariosItemProps {
  funcionario: IFuncionarios;
}

const FuncionariosItens: React.FC<FuncionariosItemProps> = ({ funcionario }) => {
 
  function createNewConnection() {
    api.post('connections', {
      user_id: funcionario.id,
    })
  }
  function handExcluir (){
    api.post('del_ramais', {
      ramal: funcionario.ramal,
    })

  }
  return (
    <article className="funcionario-item">
      <header>
        <img src={funcionario.avatar} alt={funcionario.grupo} />
        <div>
          <strong>{funcionario.grupo}</strong>
          <span>{funcionario.local}</span>
        </div>
      </header>

      <p>{funcionario.telefone}</p>

      <footer>
        <p>
          Ramal
          <strong>{funcionario.ramal}</strong>
        </p>
        <a           
          onClick={handExcluir} 
          href=""
        >
        { /*  <img src={whatsappIcon} alt="Whatsapp" /> */ }
          Excluir
        </a>
      </footer>
    </article>
  );
}

export default IFuncionarios;
