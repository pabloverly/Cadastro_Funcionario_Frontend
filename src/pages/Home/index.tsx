import React, { useState, useEffect } from 'react';
import { Link , useHistory} from 'react-router-dom'

import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/cadastro.png';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';



function Home() {
  const history = useHistory();
  const username = localStorage.getItem('login');

  const [totalConnections, setTotalConnections] = useState(0);


  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data; 

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
         
          <h2>Controle de Funcionario</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/Pesquisa" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Pesquisar
          </Link>

          <Link to="/cadastro" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Cadastrar
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home;