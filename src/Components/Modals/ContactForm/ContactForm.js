import React, { Component } from 'react';
import { Button, Form, FormText } from 'reactstrap';
import { ContactFormGroup } from './ContactFormGroup';
import { FieldGenerator } from './FieldGenerator';

export class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      modal: false,
      groups: this.props.groups,
      active: this.props.active,
			language: this.props.language
    }
  }

  componentDidMount(){
    this.setState({
      groups: this.props.groups
    })
  }

  componentDidUpdate(){
    if(this.props.active !== undefined && this.state.active !== this.props.active){
      this.setState({
        active: this.props.active
      })
    }

		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
  }


  render(){
    console.log(`This state group length: ${this.state.groups["first-name"].label.text}`)
  	return(
	    <Form action="https://formspree.io/lwattsovercash@grandeluxxemexicojoyrentals.com" method="POST">
	      {Object.keys(this.state.groups).map((groupKey) => {
	        return <ContactFormGroup group={this.state.groups[groupKey]} key={groupKey} active={this.state.active} language={this.state.language}/>
	      })}
	      <Button type="submit" value="Send" id="contactFormSubmitButton">{this.props.language === "en" ? "Submit" : "Enviar"}</Button>
	    </Form>
    )
  }
}
