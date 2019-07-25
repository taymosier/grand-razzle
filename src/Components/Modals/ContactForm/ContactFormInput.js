import React, { Component } from 'react';
import { Input } from 'reactstrap';

export class ContactFormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: this.props.field.type,
      name: this.props.field.name,
      id: this.props.field.id,
      placeholder: this.props.field.placeholder !== undefined ? this.props.field.placeholder : null
    }
  }

  render(){
    return (
      <Input type={this.state.type} name={this.state.name} id={this.state.id} placeholder={this.state.placeholder} />
    )
  }
}
