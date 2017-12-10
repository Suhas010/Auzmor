import React, { Component } from 'react';
import './App.css';

import Header from "../../Header/Component/Header";
import Footer from "../../Footer/Component/Footer";
import Graph from "../../Graph/Component/Graph";

import strings from "../constants";
class App extends Component {
  
  render() {
    return (
      <div>
        {/* Tilte Renders Header*/}
        <Header/>  
    
        <div>
          {/* This components is main component of app */}
          <Graph/>
        </div>
      
        <div className="Footer">
          <Footer/>
        </div>
      
      </div>
    );
  }
}

export default App;
