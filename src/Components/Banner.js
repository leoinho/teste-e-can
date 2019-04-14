import React, { Component } from 'react';
import '../CSS/Banner.css';
import Logo from '../Img/Logo.png';
import Lupa from '../Img/Lupa.svg';
import Cesta from '../Img/Cesta.svg';
import Menu from '../Img/Menu.png';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <nav>   
            <img className="menuMobi" src={Menu}/>
            <img className="logoBanner" src={Logo}/>
            <ul>
                <li className="visivel">Diferenciais</li>
                <li className="visivel">Produtos</li>
                <li className="visivel"><img src={Lupa}/></li>
                <li className="visivel2"><div className="cesta"><img src={Cesta}/><div className="contador"><span>2</span></div></div></li>
                              
            </ul>
        </nav>
        <div className="textoPrincipal">
            <h1>Omnichannel</h1>
            <p className="textoDesktop">
                Nossa loja conceito reune as principais<br/>
                funcionalidades Vtex, para revolucionar<br/>
                a forma dos seus clientes interagirem do<br/>
                e-commerrce.
            </p>
            <p className="textoMobi">
                Nossa loja conceito reune as<br/>
                principais funcionalidades Vtex,<br/>
                para revolucionar a forma dos<br/>
                seus clientes interagirem do<br/>
                e-commerrce.
            </p>
            <div className="saibaMais">
                <p>Saiba mais ></p>
            </div>
        </div>  
      </div>
    );
  }
}

export default Banner;
