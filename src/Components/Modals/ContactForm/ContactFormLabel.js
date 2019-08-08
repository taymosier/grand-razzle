import React, { Component } from 'react';
import { Label } from 'reactstrap';

export class ContactFormLabel extends Component {
  constructor(props){
    super(props);
    this.state = {
      for: this.props.field.for,
			language: this.props.language,
      text: this.props.field.text[this.props.language]
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language,
				text: this.props.field.text[this.props.language]
			})
		}
	}

  render(){
    return (
      <Label for={`${this.state.for}`}>{this.state.text}</Label>
    )
  }
}
