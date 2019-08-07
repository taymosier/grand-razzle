import React, { Component } from 'react';
import { ContactFormInput } from './ContactFormInput';
import { ContactFormSelect } from './ContactFormSelect';
import { ContactFormLabel } from './ContactFormLabel';
import { ContactTextArea } from './ContactTextArea';


export class FieldGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: null,
      field: null,
			language: this.props.language
    }
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
      type: this.props.fieldType,
      field: this.props.field
    })
  }

  render(){
    switch(`${this.state.type}`){
      case "input":
        console.log('THIS IS AN INPUT CASE 1')
        return <ContactFormInput field={this.state.field} language={this.state.language}/>
        break;
      case "select":
        console.log('THIS IS AN SELECT CASE 2')
        return <ContactFormSelect field={this.state.field} language={this.state.language}/>
        break;
      case "label":
        console.log('THIS IS AN LABEL CASE 3')
        return <ContactFormLabel field={this.state.field} language={this.state.language}/>
        break;
      case "textarea":
        console.log('THIS IS AN TEXTAREA CASE 4')
        return <ContactTextArea field={this.state.field} language={this.state.language}/>
        break;
      default:
        console.log(`UNREGISTERED FIELD TYPE ${this.state.type}`)
        return null
        break;
    }
    return (
      null
    )
  }
}
