import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { FieldGenerator } from './FieldGenerator';

export class ContactFormGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      group: this.props.group,
      key: this.props.key,
      category: this.props.group.category,
      active: this.props.active,
			language: this.props.language
    }
  }

  componentDidUpdate(){
    if(this.props.active !== undefined && this.state.active !== this.props.active){
      this.setState({
        active: this.props.active
      })
    }
  }

  render(){
    let style;
    this.state.category === this.state.active ? style = null : style = {"display": "none"}
    return(
      <FormGroup style={style}>
        {Object.keys(this.state.group).map((fieldKey)=> {
          return <FieldGenerator key={fieldKey} fieldType={fieldKey} field={this.state.group[fieldKey]} language={this.state.language}/>
        })}
      </FormGroup>
    )
  }
}
