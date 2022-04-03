import React from 'react'
import { FeatureContainer } from './styles'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { GiMoneyStack } from 'react-icons/gi'
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

const BainnerFeature: React.FC = () => {
  return (
    <FeatureContainer>

<div className="feature-items">
        <div className="feature-head">
          <span className="feature-title">Total de funcionarios</span>
          <span>
            <FaIcon.FaRestroom className="icons" />
          </span>
        </div>
        <div className="feature-money-container">
          <span className="feature-money">239</span>
        </div>
        <div className='percentage'>
		<span className="feature-sub">cresceu mais de </span>
		<span className="feature-rate">
            -29% <AiOutlineArrowDown className='icon-decrease' />
          </span>
		
        </div>
      </div>


	  <div className="feature-items">
        <div className="feature-head">
          <span className="feature-title">Total de estudantes</span>
          <span>
            <FaIcon.FaUserGraduate className="icons" />
          </span>
        </div>
        <div className="feature-money-container">
          <span className="feature-money">2.300</span>
        </div>
        <div className='percentage'>
		<span className="feature-sub">Desceu mais de </span>
		<span className="feature-rate">
            43% <AiOutlineArrowDown className='icon-growth' />
          </span>
        </div>
      </div>


	  <div className="feature-items">
        <div className="feature-head">
          <span className="feature-title">Total de Professores</span>
          <span>
            <FaIcon.FaChalkboardTeacher className="icons" />
          </span>
        </div>
        <div className="feature-money-container">
          <span className="feature-money">88</span>
        </div>
        <div className='percentage'>
		<span className="feature-sub">Desceu mais de </span>
          <span className="feature-rate">
            -29% <AiOutlineArrowDown className='icon-decrease' />
          </span>
        </div>
      </div>



	  <div className="feature-items">
        <div className="feature-head">
          <span className="feature-title">Total neste mês</span>
          <span>
            <GiMoneyStack className="icons" />
          </span>
        </div>
        <div className="feature-money-container">
          <span className="feature-money">2.399.291,21 Kz</span>
        </div>
        <div className='percentage'>
		<span className="feature-sub">Descei mais de </span>
		<span className="feature-rate">
            -29% <AiOutlineArrowDown className='icon-decrease' />
          </span>
        </div>
      </div>


      <div className="feature-items">
        <div className="feature-head">
          <span className="feature-title">Total no Ano</span>
          <span>
            <GiMoneyStack className="icons" />
          </span>
        </div>
        <div className="feature-money-container">
          <span className="feature-money">98.399.291,09 Kz</span>
        </div>
        <div className='percentage'>
		<span className="feature-sub">Cresceu mais de </span>
		<span className="feature-rate">
            -29% <AiOutlineArrowUp className='icon-growth' />
          </span>
        </div>
      </div>


    </FeatureContainer>
  )
}

export default BainnerFeature
