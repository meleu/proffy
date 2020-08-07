import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';
import imgLanding from '../../assets/images/landing.svg';

import iconStudy from '../../assets/images/icons/study.svg';
import iconGiveClasses from '../../assets/images/icons/give-classes.svg';
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={imgLogo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={imgLanding} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={iconStudy} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={iconGiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={iconPurpleHeart} alt="Coração roxo" />
        </span>

      </div>
    </div>
  );
}

export default Landing;