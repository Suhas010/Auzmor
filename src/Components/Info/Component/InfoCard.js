import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import BalanceDetails from './BalanceDetails.js';

import {CardData} from '../action/InfoCardAction';
import strings from '../Constants.js';

class InfoCard extends Component{
    constructor(props){
        super(props);
        
        
        this.state = {
            activeCard : 0,
            cardData: CardData,
            activeCardData: CardData[0],
        }

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    /**
     * @description handle next click of arrow button and set next card data to active state.
     * next click is disabled when active card is a last card in array of cards
     * @author Suhas R More
     * @memberof InfoCard
     */
    handleNext(){
        const activeCard = this.state.activeCard;
 
            this.setState({
                activeCard : activeCard + 1,
                activeCardData: this.state.cardData[activeCard+1]   
            },()=>{
                this.props.activeCard(this.state.activeCard);
            });
            
    }

    /**
     * Handle Pre click of arrow buttons and set previous card to active state in active card is not 0
     */
    handlePrev() {
        const activeCard = this.state.activeCard;
        
        if(activeCard>0){
        
            this.setState({
                activeCard : activeCard -1,
                activeCardData: this.state.cardData[activeCard-1]  
            },() => {
                this.props.activeCard(this.state.activeCard);
            });
        
        }
    }

    render(){
        // Style object fot card
        const PaperStyle = {
            height: 151,
            fontWeight: "900",
            fontSize: "20px",
            width: "47%",
            margin: 20,
            backgroundColor:"#5A00F3",
            color:"#ffff",
            padding:10,
            textAlign: 'center',
            display: 'inline-block',
          };

        return(
        <div>
            <Row>
                {/* renders balance and profit details*/}
                <Col sm={6}>
                    <BalanceDetails 
                    data={this.state.activeCardData.balance}/>
                </Col>

                {/* next and pre buttons to control which card wants to see*/}
                <Col sm={6}>
                    <Row>
                        <Col sm={4} className="card-acc">
                            {strings.myAccount}
                        </Col>
                        <Col sm={2}>
                        </Col>
                        <Col sm={6}>

                        <RaisedButton
                            icon={<ArrowBack/>}
                            style={{marginRight: 20}}
                            onClick={this.handlePrev}
                            disabled={this.state.activeCard == 0 ? true : false}
                            
                        />
                        <RaisedButton
                            primary={true}
                            labelPosition="before"
                            icon={<ArrowForward/>}
                            onClick={this.handleNext.bind(this)}
                            disabled={this.state.activeCard == 2 ?true : false}
                        /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>

                            {/*Card Container*/}    
                            <Paper style={PaperStyle}>
                                <Row className="card-name">{this.state.activeCardData.card.name}</Row>
                                <Row className="card-no">{this.state.activeCardData.card.no} * * * * * *  * * * BLX</Row>
                                <Row className="card-owner">
                                    <Col sm={5} className="exchange">
                                    {this.state.activeCardData.card.ex}
                                    </Col>
                                    <Col sm={5} className="owner-name">
                                    {this.state.activeCardData.card.cardo}    
                                    </Col>
                                </Row>
                            </Paper>  
                        
                        </Col>
                    </Row>
                </Col>

            </Row>         
        </div>
        );
    }
}

export default InfoCard;