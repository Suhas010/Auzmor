import React, { Component } from "react";
import { Col, Modal, Button } from "react-bootstrap";

/**
 * @description This is pop madal to show Error Success messages on Modal 
 *              I want to configure it in a such a way that it can be used to show Success and Error messages
 *              but due to Time Limit I am focusing more on functinality rather than Performace
 * 
 * @author Suhas R More
 * @class PopupMessage
 * @extends {Component}
     */
	
class PopupMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: true,
		};



	}

	render() {
		const title = this.props.title == undefined ? "Alert" : this.props.title;

		return (
			<Modal

				className="popupScreen"
				backdrop={true}
				show={true}
				onHide={this.props.onClick}>
				<Modal.Header
					className="popupHeader">
					<h
						className="popupHeaderText">{this.props.title}</h>
				</Modal.Header>
				<Modal.Body>

					{this.props.message}

				</Modal.Body>
				<Modal.Footer>
					<Button
						className="popupButton"
						onClick={this.props.onClick}
					>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
export default PopupMessage;
