import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as LinkAncl } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='header'>
      <div className="logo">
        <h1>Brand<span className='mark'>ing</span> </h1>
      </div>
      <div className="icon" onClick={toggleNav}>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <LinkAncl to="#home">Home</LinkAncl>
        <LinkAncl to="#services">Servicios</LinkAncl>
        <LinkAncl to="#about">Sobre Nosotros</LinkAncl>
        {/* <LinkAncl to="#specialist">Nuestros especialistas</LinkAncl> */}
        <LinkAncl to="#testimony">Testimonios</LinkAncl>
        <LinkAncl to="#contacts">Contactanos</LinkAncl>
        <LinkAncl to="#questions">Preguntas Frecuentes</LinkAncl>
      </nav>
    </div>
  );
};

export default Header;
