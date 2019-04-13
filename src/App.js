import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Vitrine from './Components/Vitrine';


class App extends Component {
  render() {
    return (
      <div >
        <Banner/>
        <Vitrine/>
      </div>
    );
  }
}

export default App;
