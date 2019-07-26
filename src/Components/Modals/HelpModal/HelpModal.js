import React, { Component } from 'react';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './help.css';


export class HelpModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
      <div className={"help-toggle-container"}>
        <Button className={"help-toggle"} onClick={this.toggle}>
          <img src={require(`./info.png`)} />
        </Button>
        <Modal className="help" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>
            How It Works
          </ModalHeader>
          <ModalBody className="help">
            <Col className="help" >
              <h3>Step #1: Check Dates</h3>
              <p>Fill out Check Availability form. Availability changes daily. We call resort to check availability of your desired location and date. We try our best to respond within 24 hours. We send a confirmation email that the dates and location are available along with the Booking Form.</p>
            </Col>
            <Col className="help" >
              <h3>Step #2: Book Dates</h3>
              <p>Fill out Booking Form or call 919-452-8777. We book reservation and send a confirmation number. If desired departure date is in 2.5 months or less make sure of flight availability before filling out Booking Form. </p>
            </Col>
            <Col className="help" >
              <h3>Step #3: Pay</h3>
              <p>Pay once there’s a confirmation number that’s verifiable with resort's central reservations. Full payment is then due.  Payments - PayPal or check. </p>
            </Col>
            <Col className="help">
            <div className="help"></div>
              <h3>Step #4: Transportation</h3>
              <p>Transportation and guest letter will be provided to you with free courtesy transportation to the resort where you will be treated as the guests of owners at the exclusive resort. </p>
            </Col>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    )
  }

}
