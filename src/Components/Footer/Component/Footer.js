import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Card } from 'material-ui/Card';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Card className="Footer">
                <div className="row Footer">
                    
                    <div className="col-md-12">
                        <a href="https://suhasmore.in" data-toggle="tooltip" title="Visit Personal Website : suhasmore.in"> Suhas Rajendra More </a> |
                        <a href="mailto:moresuhas010@gmail.com" data-toggle="tooltip" title="Contact Me"> moresuhas010@gmail.com </a> |
                        <a href="mailto:iam@suhasmore.in" data-toggle="tooltip" title="Primary Email Address"> iam@suhasmore.in </a> |
                        <a href="tel:+919689649696" data-toggle="tooltip" title="Personal No"> +91968 964 9696 </a>                        
                    </div>

                </div>
            </Card>


        );

    }
}

export default Footer;