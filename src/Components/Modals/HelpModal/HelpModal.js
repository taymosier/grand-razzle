import React, { Component } from 'react';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { HelpModalBody } from './HelpModalBody';
import { HelpNavigator } from './HelpNavigator';
import './help.css';


export class HelpModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      active: 0
    }
    this.toggle = this.toggle.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(){
    this.setState({
      icon: "./info.png"
    })
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }

  setActive(e){
    e.preventDefault();
    this.setState({
      active: e.target.value
    })
  }

  render(){
    const steps = [
      {
        "header": "Step #1: Check Dates",
        "body": "Fill out Check Availability form. Availability changes daily. We call resort to check availability of your desired location and date. We try our best to respond within 24 hours. We send a confirmation email that the dates and location are available along with the Booking Form."
      },
      {
        "header": "Step #2: Book Dates",
        "body": "Fill out Booking Form or call 919-452-8777. We book reservation and send a confirmation number. If desired departure date is in 2.5 months or less make sure of flight availability before filling out Booking Form."
      },
      {
        "header": "Step #3: Pay",
        "body": "Pay once there’s a confirmation number that’s verifiable with resort's central reservations. Full payment is then due.  Payments - PayPal or check. "
      },
      {
        "header": "Step #4: Transportation",
        "body": "Transportation and guest letter will be provided to you with free courtesy transportation to the resort where you will be treated as the guests of owners at the exclusive resort. "
      }
  ]
    return(
      <div className={"help-toggle-container"}>
        <Button className={"help-toggle"} onClick={this.toggle}>
          {this.state.icon !== undefined ? <img src={require(`${this.state.icon}`)} /> : null }
        </Button>
        <Modal className="help" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>
            How It Works
          </ModalHeader>
          <HelpModalBody isOpen={this.state.modal} toggle={this.toggle} step={steps[this.state.active]}/>
          <ModalFooter>
            <HelpNavigator steps={steps} setActive={this.setActive} active={this.state.active}/>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}
