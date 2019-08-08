import React, { Component } from 'react';
import { Input } from 'reactstrap';

export class ContactFormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: this.props.field.type,
      name: this.props.field.name,
      id: this.props.field.id,
			language: this.props.language,
      placeholder: this.props.field.placeholder !== undefined ? this.props.field.placeholder : null
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    return (
      <Input type={this.state.type} name={this.state.name} id={this.state.id} placeholder={this.state.placeholder[this.state.language]} />
    )
  }
}
