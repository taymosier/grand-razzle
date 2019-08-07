import React, { Component } from 'react';
import { Input } from 'reactstrap';

export class ContactFormSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: this.props.field.options,
      name: this.props.field.name,
      id: this.props.field.id,
      multiple: this.props.field.multiple,
			language: this.props.language,
      placeholder: this.props.field.placeholder !== undefined ? this.props.field.placeholder : null
    }
  }

  render(){
    return(
      <Input type="select" name={`${this.state.name}`} id={`${this.state.id}`} multiple={this.state.multiple}>
        {this.state.options.map((option) => {
          return <option key={option}>{option}</option>
         })
        }
      </Input>
    )
  }
}
