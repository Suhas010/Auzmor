import React, { Component } from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { getData } from "../action/GraphAction.js";
import Info from "../../Info/Component/Info";
import SideBar from "../../SideBar/Component/Sidebar";

import strings , { GRAPH_TYPE, GRAPH_SCALE } from "../Constants.js";

class Graph extends Component {
 
  constructor(props) {
    super(props);

    //INITIAL STATES
    this.state = {
      graphType: GRAPH_TYPE.LINE,
      data: null,
      activeCard: 0,
     
    }

    //BIND MENTHODS
    this.getGraph = this.getGraph.bind(this);
    this.setGraphScale = this.setGraphScale.bind(this);
    this.handleActiveCard = this.handleActiveCard.bind(this);
    this.onChangeGraph = this.onChangeGraph.bind(this);
  }
  
  componentWillMount(){
      // Get Graph Data and assign it to data state
      const data =  getData();
  
       this.setState({
            data: data.YEAR[0],
            graphData: data
        })
  }
  /**
   * @description Handle active card click 
   * @author Suhas R More
   * @param {any} value 
   * @memberof Graph
   */
  handleActiveCard(value){
    this.setState({
      activeCard: value,
      data: this.state.graphData.YEAR[value]
    })
  }

  // handle whether graph is month or year or week type
  setGraphScale(e){
      switch(e){
          case GRAPH_SCALE.YEAR:
          this.setState({
              data: this.state.graphData.YEAR[this.state.activeCard]
          })
          break;
          case GRAPH_SCALE.MONTH:
          this.setState({
              data: this.state.graphData.MONTH[this.state.activeCard]
          })
          break;
          case GRAPH_SCALE.WEEK:
          this.setState({
              data: this.state.graphData.WEEK[this.state.activeCard]
          })
          break;
      }
  }

  // Handle whether radio button is on Line graph, Bar Graph or Pie graph and accordingly render graph
  getGraph(){
      switch(this.state.graphType){
        
        case GRAPH_TYPE.BAR:
          return (
            <Bar data={this.state.data} />
          );
          break;

        case GRAPH_TYPE.LINE:
          return (
            <Line data={this.state.data} />
          );
          break;
        
        case GRAPH_TYPE.PIE:
          return (
            <Pie data={this.state.data} />
          );
          break;

      }
    
  }
  /**
   * @description hanlde radio button change
   * @author Suhas R More
   * @param {any} e 
   * @param {any} v 
   * @memberof Graph
   */
  onChangeGraph(e,v){
    this.setState({
      graphType: v,
    })
  }

  render() {
    return (
      <div className="App">
          <div className="row col-offset-6">
            {/* Info component contains Balance and card detail component*/}
            <Row>
              <Info activeCard={this.handleActiveCard}/>
            </Row>  
            <hr/>

            <Row>
                <Col sm={8}></Col>
                <Col sm={1}>
                  {/* Radio buttons to change graph type Bar,Line Pie*/}
                  <RadioButtonGroup name="shipSpeed"  onChange={this.onChangeGraph} defaultSelected={GRAPH_TYPE.LINE}>
                    <RadioButton
                      value={GRAPH_TYPE.LINE}
                      label={strings.line}
                    />
                    <RadioButton
                      value={GRAPH_TYPE.BAR}
                      label={strings.bar}
                     
                    />
                    <RadioButton
                      value={GRAPH_TYPE.PIE}
                      label={strings.pie}
                    
                    />
                  </RadioButtonGroup>

                </Col>
                
                <Col sm={3}>
                  <SideBar 
                     selectedScale={this.setGraphScale}/>
                </Col>

            </Row>
          
          </div>    
          {this.getGraph()}
        
      </div>
    );
  }
}


export default Graph;