import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ContactForm } from './ContactForm';
import { ContactNavigator } from './ContactNavigator';
import "./contact-form.css";
var contactForm = require('./contactForm.json');


export class ContactModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      groups: contactForm,
      modal: false,
      active: "Basic"
    }
    this.toggle = this.toggle.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(){
    this.setState({
      icon: "./contact.svg"
    })
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  setActive(e){
    e.preventDefault();
    this.setState({
      active: `${e.target.value}`
    })
  }

  render(){
    console.log(Object.keys(contactForm))
    return(
      <div className={"contact-toggle-container"}>
        <Button className={"contact-toggle"} onClick={this.toggle}>
          {this.state.icon !== undefined ? <img src={require(`${this.state.icon}`)} /> : null}
        </Button>
        <Modal className="contact-form" isOpen={this.state.modal} toggle={this.toggle} groups={this.state.groups}>
          <ModalHeader toggle={this.toggle}>
            Fill Out The Sections Below And Click Submit!
          </ModalHeader>
            <ContactNavigator setActive={this.setActive} active={this.state.active}/>
          <ModalBody><ContactForm groups={this.state.groups} active={this.state.active}/></ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
