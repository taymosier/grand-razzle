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
        return <ContactFormInput field={this.state.field} language={this.state.language}/>
        break;
      case "select":
        return <ContactFormSelect field={this.state.field} language={this.state.language}/>
        break;
      case "label":
        return <ContactFormLabel field={this.state.field} language={this.state.language}/>
        break;
      case "textarea":
        return <ContactTextArea field={this.state.field} language={this.state.language}/>
        break;
      default:
        console.log(`ERROR. UNREGISTERED FIELD TYPE ${this.state.type}`)
        return null
        break;
    }
    return (
      null
    )
  }
}
