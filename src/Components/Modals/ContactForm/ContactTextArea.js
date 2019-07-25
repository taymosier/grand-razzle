import React, { Component } from 'react';
import { Input } from 'reactstrap';


export class ContactTextArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.field.id,
      name: this.props.field.name,
      placeholder: this.props.placeholder !== undefined ? this.props.placeholder : null
    }
  }

  render(){
    return(
      <Input type="textarea" name={`${this.state.name}`} id={`${this.state.id}`} />
    )
  }
}
