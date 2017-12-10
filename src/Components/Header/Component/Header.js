import React, { Component } from 'react';
import logo from '../../../logo.svg';
import Paper from 'material-ui/Paper';
import {Row,Col} from "react-bootstrap";

import strings from '../constants';
class Header extends Component{    
    constructor(props){
        super(props);     
          
    }
    render(){
        return(
         <div>   
            <Row>
            <Paper className="PaperStyle" zDepth={3} >
                {strings.header}
            </Paper>
            </Row>
        </div>
        )
    }

}

export default Header;