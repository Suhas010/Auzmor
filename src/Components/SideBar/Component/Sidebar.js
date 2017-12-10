import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import strings, { GRAPH_SCALE } from '../Constants.js';

class SideBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedScale: GRAPH_SCALE.YEAR
        }


        this.onChangeGraphData = this.onChangeGraphData.bind(this);
    }

    onChangeGraphData(selectedScale){
        this.setState([
            selectedScale
        ])
        this.props.selectedScale(selectedScale);

    }
    render(){
        return (
            <div>    
              <Tabs onChange={this.onChangeGraphData}>
                <Tab
                  label={strings.year}
                  value={GRAPH_SCALE.YEAR}
                />
                <Tab
                  label={strings.month}
                  value={GRAPH_SCALE.MONTH}
                />
                <Tab
                  label={strings.week}
                  value={GRAPH_SCALE.WEEK}
                />
                </Tabs>
         </div>
        );
    }
}

export default SideBar;