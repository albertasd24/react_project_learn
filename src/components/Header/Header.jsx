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
        <Link to={"/"}>Nuestros especialistas</Link>
        <Link to={"/"}>Contactanos</Link>
        <Link to={"/"}>Preguntas Frecuentes</Link>
      </nav>
    </div>
  );
};

export default Header;
