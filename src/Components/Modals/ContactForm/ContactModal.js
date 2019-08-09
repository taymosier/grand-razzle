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
      active: "Basic",
			language: this.props.language
    }
    this.toggle = this.toggle.bind(this);
    this.setActive = this.setActive.bind(this);
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
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
          {this.state.icon !== undefined ? <p>How It Works</p> : null}
        </Button>
        <Modal className="contact-form" isOpen={this.state.modal} toggle={this.toggle} groups={this.state.groups}>
          <ModalHeader toggle={this.toggle}>
            {this.state.language === "en" ? "Fill Out The Sections Below And Click Submit!" : "Complete las secciones a continuación y haga clic en Enviar."}
          </ModalHeader>
            <ContactNavigator setActive={this.setActive} active={this.state.active}/>
          <ModalBody>
						<ContactForm groups={this.state.groups} active={this.state.active} language={this.state.language}/>
					</ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
