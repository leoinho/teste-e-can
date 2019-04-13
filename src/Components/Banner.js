import React, { Component } from 'react';
import '../CSS/Banner.css';
import Logo from '../Img/Logo.png';
import Lupa from '../Img/Lupa.svg';
import Cesta from '../Img/Cesta.svg';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <nav>
            <img src={Logo}/>
            <ul>
                <li>Diferenciais</li>
                <li>Produtos</li>
                <li><img src={Lupa}/></li>
                <li><div className="cesta"><img src={Cesta}/><div className="contador"><span>2</span></div></div></li>
                              
            </ul>
        </nav>
        <div className="textoPrincipal">
            <h1>Omnichannel</h1>
            <p>
                Nossa loja conceito reune as principais<br/>
                funcionalidades Vtex, para revolucionar<br/>
                a forma dos seus clientes interagirem dp<br/>
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
