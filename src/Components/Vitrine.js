import React, { Component } from 'react';
import '../CSS/Vitrine.css';
import Casaco from '../Img/ImgVitrine/Casaco.png';
import Notebook from '../Img/ImgVitrine/Notebook.png';
import Caneca from '../Img/ImgVitrine/Caneca.png';
import Camiseta from '../Img/ImgVitrine/Camiseta.png';
import Email from '../Img/ImgVitrine/envelope.svg';
import Triangulo from '../Img/ImgVitrine/Triangulo.svg';
import Slider from "react-slick";

class Vitrine extends Component {
  constructor(props){
    super(props);
    this.state ={
      produtos: [
        { 
          desconto:'',
          imagem: Casaco,
          nome: 'Casaco de Moleton Unisex',
          precoAntigo: '',
          precoNovo: 99.90,
        },
        { 
          desconto:'',
          nome: Notebook,
          imagem: 'Notebook Moleskine Preto',
          precoAntigo: 39.90,
          precoNovo: 25.90,
        },
        { 
          desconto:'',
          imagem: Caneca,
          nome: 'Caneca VTEX',
          precoAntigo: '',
          precoNovo: 16.00,
        },
        { 
          desconto:'',
          imagem: Camiseta,
          nome: 'Camiseta algodão feminina',
          precoAntigo: '',
          precoNovo: 35.90,
        }
      ]
    }
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <div>
      <div className="vitrine">
        <div className="testoVitrine">
          <h1>Compre e ajude a fundação TETO</h1>
          <p>
            Experimente nossas funcionalidades fazendo uma compra real de um produto VTEX e ajude a construir o país.<br/>
            todo o valor das vendas será revertido para a construção de casas populares. Saiba mais          
          </p>
        </div>
        
        <div className="produtos">
        <Slider {...settings}>
                <div className="produto">
                  <img src={Casaco}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div> 
                <div className="produto">
                <img src={Casaco}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Caneca}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Camiseta}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Casaco}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Casaco}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Caneca}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Camiseta}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
                <div className="produto">
                <img src={Casaco}/>
                  <p>Casaco de Moleton Unisex</p>
                  <p>R$99,90</p>
                </div>
              </Slider>
        </div>
        
      </div>
        <div className="promocoes">
          <div className="aoTopo">
            <img src={Triangulo}/>
            <p>Voltar<br/>ao topo</p>
          </div>
          <h1>Receba novidades e promoções</h1>
          <p>Saiba em primeira mão de todas as novidades a respeito de funcionalidades Omnichannel lançadas pela VETX</p>
          <div className="areaEmail">
            <input type="text" placeholder="Insira seu e-mail aqui" />
            <span><div className="fundoCarta"><img className="carta" src={Email}/></div><p>Assinar</p></span>
            </div>
        </div>
      </div>
    );
  }
}

export default Vitrine;
