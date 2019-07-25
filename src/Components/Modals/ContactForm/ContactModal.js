import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ContactForm } from './ContactForm';
import "./contact-form.css";
var contactForm = require('./contactForm.json');


export class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: contactForm,
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    console.log(Object.keys(contactForm))
    return(
      <div>
        <Button className={"contact-toggle"} onClick={this.toggle}>
          <img src={require(`./contact.svg`)} />
        </Button>
        <Modal className="contact-form" isOpen={this.state.modal} toggle={this.toggle} groups={this.state.groups}>
          <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
          <ModalBody><ContactForm groups={this.state.groups}/></ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    )
  }
}
