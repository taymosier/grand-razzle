import React, { Component } from 'react';
import { Label } from 'reactstrap';

export class ContactFormLabel extends Component {
  constructor(props){
    super(props);
    this.state = {
      for: this.props.field.for,
      text: this.props.field.text
    }
  }

  render(){
    return (
      <Label for={`${this.state.for}`}>{this.state.text}</Label>
    )
  }
}
