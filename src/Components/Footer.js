import React, { Component } from 'react';
import '../CSS/Footer.css';
import Seguro1 from '../Img/ImgFooter/Seguro1.png';
import Seguro2 from '../Img/ImgFooter/Seguro2.png';
import Cartoes from '../Img/ImgFooter/Cartoes.png';
import Icone1 from '../Img/ImgFooter/Icone1.png';
import Icone2 from '../Img/ImgFooter/Icone2.png';
import Icone3 from '../Img/ImgFooter/Icone3.png';
import Icone4 from '../Img/ImgFooter/Icone4.png';
import TextoFooter from '../Img/ImgFooter/TextoFooter.png';
import Logo1 from '../Img/ImgFooter/Logo1.png';
import Logo2 from '../Img/ImgFooter/Logo2.png';


class Footer extends Component {
  render() {
    return (
      <div >
        <div className="footer1">
            <div className="informaFooter">
                <div className="institucional">
                    <p className="tituloFooter">INSTITUCIONAL</p>
                    <ul>
                        <li>SOBRE A VTEX</li>
                        <li>PROJETO OMNI</li>
                        <li>POLÍTICA DE PRIVACIDADE</li>
                        <li>POLÍTICA DE ENTREGA</li>
                    </ul> 
                </div>
                <div className="seguro">
                    <p className="tituloFooter">SITE 100% SEGURO</p>
                    <div className="logoSeguro">
                        <img src={Seguro1}/>
                        <img style={{marginLeft: 63}} src={Seguro2}/>
                    </div>
                </div>
                <div className="pagamento">
                    <p className="tituloFooter">FORMAS DE PAGAMENTO</p>
                    <img src={Cartoes}/>
                </div>
                <div className="vetx">
                    <p className="tituloFooter">#VTEXOMNI</p>
                    <div className="iconesFooter">
                        <div><img src={Icone1}/></div>
                        <div><img src={Icone2}/></div>
                        <div><img src={Icone3}/></div>
                        <div><img src={Icone4}/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer2">
            <div className="informaFooter2">
                <div>
                    <img src={TextoFooter}/>
                </div>
                <div className="logosFooter">
                    <div>
                        <p>Powered by:</p>
                        <img src={Logo1}/>
                    </div>
                    <div>
                        <p>Created by:</p>
                        <img src={Logo2}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
