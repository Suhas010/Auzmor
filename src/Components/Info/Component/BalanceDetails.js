import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import strings from '../Constants.js';

class BalanceDetails extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
        <div>
            <Row className="card-balance">
                {strings.balance}
            </Row>

            <Row>
                <Col sm={6} className="bal-name">
                  <Row className="bal">
            
                    <Col sm={4} className="eth">
                        {this.props.data.name}  
                    </Col>
            
                    <Col sm={2} className="balance">
                        {this.props.data.prise}
                    </Col>
                  </Row>
            
                  <Row className="small">
            
                      <Col sm={4} className="profit-pro">
                         ${this.props.data.prof}
                      </Col>
            
                      <Col sm={6} className="profit-per">
                         {this.props.data.per}
                      </Col>
            
                  </Row>    
            
                </Col>
            
                <Col sm={6} className="bal-val">
                    <RaisedButton
                        secondary={true}
                        label="Send"/>       
                </Col>
            </Row>

            <Row>
                <Row className="rev">
                    <Col sm={6}>
                    {strings.rev}
                    </Col>
                    <Col sm={6}>
                    {strings.rev}
                    </Col>
                </Row>
                <Row className="profit">
                    <Col sm={6}>
                    ${this.props.data.revenue} 
                    </Col>
                    <Col sm={6}>
                    ${this.props.data.prof}
                    </Col>
                </Row>    
            </Row>        
        </div>
        );
    }
}

export default BalanceDetails;