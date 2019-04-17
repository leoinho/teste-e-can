import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Vitrine from './Components/Vitrine';
import Footer from './Components/Footer';
import Principal from './Components/Principal';


class App extends Component {
  render() {
    return (
      <div >
        <Principal/>
        <Footer/>
      </div>
    );
  }
}

export default App;
