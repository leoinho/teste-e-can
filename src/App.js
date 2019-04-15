import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Vitrine from './Components/Vitrine';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div >
        <Banner/>
        <Vitrine/>
        <Footer/>
      </div>
    );
  }
}

export default App;
