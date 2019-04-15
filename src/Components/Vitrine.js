import React, { Component } from 'react';
import '../CSS/Vitrine.css';
import Casaco from '../Img/ImgVitrine/Casaco.png';
import Notebook from '../Img/ImgVitrine/Notebook.png';
import Caneca from '../Img/ImgVitrine/Caneca.png';
import Camiseta from '../Img/ImgVitrine/Camiseta.png';
import Email from '../Img/ImgVitrine/envelope.svg';
import Triangulo from '../Img/ImgVitrine/Triangulo.svg';
import Cesta from '../Img/Cesta.svg';
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
          imagem: Notebook,
          nome: 'Notebook Moleskine Preto',
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
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
      <div className="vitrine">
        <div className="textoVitrine">
          <h1>Compre e ajude a fundação TETO</h1>
          <p className="desktop">
            Experimente nossas funcionalidades<br/>
            fazendo uma compra real de um produto<br/>
            VTEX e ajude a construir o país.<br/>
            todo o valor das vendas será revertido para<br/>
            a construção de casas populares.<br/><br/>
             Saiba mais          
          </p>
          <p className="mobile">
            Experimente nossas funcionalidades fazendo uma compra real de um produto VTEX e ajude a construir o país.<br/>
            todo o valor das vendas será revertido para a construção de casas populares. Saiba mais          
          </p>
        </div>
        
        <div className="produtosDesktop">
          {this.state.produtos.map((prod)=>{
            return(
              <div className="produto">
                  <img className="imagemProduto" src={prod.imagem}/>
                  <p className="nomeProduto">Casaco de Moleton Unisex</p>
                  <p className="precoNovo">R$99,90</p>
                  <div className="botao"><img src={Cesta}/><p>Comprar</p></div>
                </div> 
            );
          })}
        </div>
        <div className="produtosMobile">
          <Slider {...settings}>
          <div className="produto">
                  <img className="imagemProduto" src={Casaco}/>
                  <p className="nomeProduto">Casaco de Moleton Unisex</p>
                  <p className="precoNovo">R$99,90</p>
                  <div className="botao"><img src={Cesta}/><p>Comprar</p></div>
                </div>
                <div className="produto">
                  <img className="imagemProduto" src={Notebook}/>
                  <p className="nomeProduto">Casaco de Moleton Unisex</p>
                  <p className="precoNovo">R$99,90</p>
                  <div className="botao"><img src={Cesta}/><p>Comprar</p></div>
                </div>
                <div className="produto">
                  <img className="imagemProduto" src={Caneca}/>
                  <p className="nomeProduto">Casaco de Moleton Unisex</p>
                  <p className="precoNovo">R$99,90</p>
                  <div className="botao"><img src={Cesta}/><p>Comprar</p></div>
                </div>
                <div className="produto">
                  <img className="imagemProduto" src={Camiseta}/>
                  <p className="nomeProduto">Casaco de Moleton Unisex</p>
                  <p className="precoNovo">R$99,90</p>
                  <div className="botao"><img src={Cesta}/><p>Comprar</p></div>
                </div>
          </Slider>
        </div>
        
      </div>
        <div className="promocoes">
          <a href="#" className="aoTopo">
            <div className="aoTopo">
              <img src={Triangulo}/>
              <p>Voltar<br/>ao topo</p>
            </div>
          </a>
          <h1 className="desktop">Receba novidades e promoções</h1>
          <h1 className="mobile">Receba novidades<br/>e promoções</h1>
          <p className="desktop">Saiba em primeira mão de todas as novidades a respeito de funcionalidades Omnichannel lançadas pela VETX</p>
          <p className="mobile">Saiba em primeira mão de todas as<br/>novidades a respeito de funcionalidades<br/>Omnichannel lançadas pela VETX</p>
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
