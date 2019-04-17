import React, { Component } from 'react';
import '../CSS/Banner.css';
import Logo from '../Img/Logo.png';
import Lupa from '../Img/Lupa.svg';
import Cesta from '../Img/Cesta.svg';
import Menu from '../Img/Menu.png';
import '../CSS/Vitrine.css';
import Casaco from '../Img/ImgVitrine/Casaco.png';
import Notebook from '../Img/ImgVitrine/Notebook.png';
import Caneca from '../Img/ImgVitrine/Caneca.png';
import Camiseta from '../Img/ImgVitrine/Camiseta.png';
import Email from '../Img/ImgVitrine/envelope.svg';
import Triangulo from '../Img/ImgVitrine/Triangulo.svg';
import Excluir from '../Img/Excluir.svg';
import swal from 'sweetalert'

import Slider from "react-slick";

class Principal extends Component {
    constructor(props){
        super(props);
        this.state ={
            lado: '-500%',
            largura: '',
            altura: '',
            display: 'none',
            contador: 0,
            total: 0,
            carrinho: [],
          produtos: [
            { 
              desconto:'',
              imagem: Casaco,
              nome: 'Casaco de Moleton Unisex',
              precoAntigo: '',
              precoNovo: '99.90',
            },
            { 
              desconto:'',
              imagem: Notebook,
              nome: 'Notebook Moleskine Preto',
              precoAntigo: '39.90',
              precoNovo: '25.90',
            },
            { 
              desconto:'',
              imagem: Caneca,
              nome: 'Caneca VTEX',
              precoAntigo: '',
              precoNovo: '16.00',
            },
            { 
              desconto:'',
              imagem: Camiseta,
              nome: 'Camiseta algodão feminina',
              precoAntigo: '',
              precoNovo: '35.90',
            }
          ]
        }
      }
      excluir = item=>{
        
        const num = this.state.contador;
        const resul = num - 1;
        this.setState({ contador: resul })
        var index = this.state.carrinho.indexOf(item);
        this.state.carrinho.splice(index,1)
        console.log(item.precoNovo)
        var tot = this.state.total;
        tot -= parseInt(item.precoNovo);
        this.setState({ total: tot })
        swal({
            icon: "error",
            text: "O produto foi excluido do carrinho!",
          });

    }

      compra = produto =>{
          const num = this.state.contador;
          const resul = num + 1;
          this.setState({ contador: resul })
          this.state.carrinho.push(produto)
          var tot = 0;
          for(var i = 0; i < this.state.carrinho.length; i++){        
              tot += parseInt(this.state.carrinho[i].precoNovo);
              this.setState({ total: tot })

          }
          
          swal({
              icon: "success",
              text: "O produto foi adicionado ao carrinho!",
            });
        }
  render() {
    const abreCarrinho = ()=>{    
         
      this.setState({ display: 'block' })
  }

    const fechaCarrinho = ()=>{     
      this.setState({ display: 'none' })
  }
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const menuMobi = ()=>{     
         
        const largura = window.screen.availWidth;
        const altura =   window.screen.availHeight;
        this.setState({ lado: 0 })
        this.setState({ largura })
        this.setState({ altura })
    }
      const fechaMenu = ()=>{     
        this.setState({ lado: '-500%'})
    }
    return (
        <div>
      <div className="banner">
        <nav>   
            <img onClick={menuMobi} className="menuMobi" src={Menu}/>
            <div 
            style={{ 
              
              position: "absolute",
              width: this.state.largura, 
              height: this.state.altura, 
              background: "white", 
              zIndex:2,
              left: this.state.lado,
              transition: "left 1s",
              top: 0,
              display: "flex",
              justifyContent: "center",
              paddingTop: 5,
              }}>
              <div style={{background: "rgb(247 ,25,99)", display: "flex", justifyContent:"space-between",height:60, width:"100%", marginTop:-7}}>
                <h3 style={{ position: "relative", left:20,top:-4,color: "#FFFFFF" }}>Menu</h3>
                <img style={{ position: "relative", left:0,top:0, paddingRight: 10 }} src={Excluir}
                onClick={fechaMenu}
                  />
              </div>
            </div>
            <img className="logoBanner" src={Logo}/>
            <ul>
                <li className="visivel">Diferenciais</li>
                <li className="visivel">Produtos</li>
                <li className="visivel"><img src={Lupa}/></li>
                <li className="visivel2"><div className="cesta">
                  <img  onClick={()=>{abreCarrinho()}} src={Cesta}/>
                  <div className="carrinho" 
                style={{ display: this.state.display,  }}>
                    <div style={{background: "rgb(247 ,25,99)", display: "flex", justifyContent:"space-between",height:60, width:"100%", marginTop:-7}}>
                        <h2 style={{ position: "relative", left:20,    margin: 'auto',color: "#FFFFFF" }}>Carrinho</h2>
                        <img src={Excluir} onClick={fechaCarrinho} style={{ }}/>
                        
                    </div>
                    {this.state.carrinho.map((item)=>{
                        return(
                            <div className="itensCarrinho">
                                <img src={item.imagem}/>
                                <p>{item.nome}</p>
                                <p>{item.precoNovo}</p>
                                <p onClick={()=> this.excluir(item)}>X</p>
                            </div>
                        );
                    })}
                    <div className="total">
                        
                        <h4>Total = R$ {this.state.total},00</h4>
                    </div>
                </div> 
                <div className="contador"><span>{this.state.contador}</span></div></div></li>
                              
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
                <p className="nomeProduto">{prod.nome}</p>
                <p className="precoNovo">R${prod.precoNovo}</p>
                <div onClick={()=> this.compra(prod) } className="botao"><img src={Cesta}/><p>Comprar</p></div>
              </div> 
          );
        })}
      </div>
      <div className="produtosMobile">
        <Slider {...settings}>
        {this.state.produtos.map((prod)=>{
          return(
            <div className="produto">
                <img className="imagemProduto" src={prod.imagem}/>
                <p className="nomeProduto">{prod.nome}</p>
                <p className="precoNovo">R${prod.precoNovo}</p>
                <div onClick={()=> this.compra(prod) } className="botao"><img src={Cesta}/><p>Comprar</p></div>
              </div> 
          );
        })}
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
          <span style={{cursor: 'pointer'}}><div className="fundoCarta"><img className="carta" src={Email}/></div><p>Assinar</p></span>
          </div>
      </div>
      </div>
    );
  }
}

export default Principal;
