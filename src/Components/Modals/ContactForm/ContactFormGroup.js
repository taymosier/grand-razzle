import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { FieldGenerator } from './FieldGenerator';

export class ContactFormGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      group: this.props.group,
      key: this.props.key
    }
  }

  componentDidMount(){
    this.setState({

    })
  }

  render(){

    return(
      <FormGroup>
        {Object.keys(this.state.group).map((fieldKey)=> {
          return <FieldGenerator key={fieldKey} fieldType={fieldKey} field={this.state.group[fieldKey]} />
        })}
      </FormGroup>
    )
  }
}
