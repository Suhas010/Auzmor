import React, { Component } from 'react';
import {Bar,Line} from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap';

import { GRAPH_TYPE, GRAPH_SCALE } from "../Constants.js";
import InfoCard from './InfoCard.js';

class Info extends Component {

  constructor(props){
    super(props);

    //INITIAL STATES
    this.state = {
      graphType: GRAPH_TYPE.LINE,
      data: null,
    }

  }
  
  render() {
    return (
      <div className="App">
          <div className="row col-offset-6">

            <Row>
                  <InfoCard activeCard={this.props.activeCard}/>
            </Row>
          
          </div>    
      </div>
    );
  }
}


export default Info;