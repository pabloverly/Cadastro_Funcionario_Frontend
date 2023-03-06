import React from 'react';

import whatsappIcon from '../../assets/images/icons/excluir.png';
import api from '../../services/api';

import './styles.css';


export interface Item {
  id?: number;
  avatar?: string;
  grupo?: string;
  telefone?: number;
  local?: string;
  ramal?: string;
}

interface ItemProps {
  item: Item;
}

const Item: React.FC<ItemProps> = ({ item }) => {
 
  function createNewConnection() {
    api.post('connections', {
      user_id: item.id,
    })
  }
  function handExcluir (){
    api.post('del_ramais', {
      ramal: item.ramal,
    })

  }
  return (
    <article className="teacher-item">
      <header>
        <img src={item.avatar} alt={item.grupo} />
        <div>
          <strong>{item.grupo}</strong>
          <span>{item.local}</span>
        </div>
      </header>

      <p>{item.telefone}</p>

      <footer>
        <p>
          Ramal
          <strong>{item.ramal}</strong>
        </p>
       
      </footer>
    </article>
  );
}

export default Item;
