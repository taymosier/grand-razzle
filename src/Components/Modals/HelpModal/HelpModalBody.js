import React, { Component } from 'react';
import { Col, ModalBody } from 'reactstrap';

export class HelpModalBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      toggle: this.props.toggle,
      header: this.props.step.header,
      body: this.props.step.body,
			language: this.props.language
    }
  }

  componentDidUpdate(){
    if(this.state.header !== this.props.step.header){
      this.setState({
        header: this.props.step.header,
        body: this.props.step.body
      })
    }
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
  }

  render(){

    return(
      <ModalBody className="help" isOpen={this.state.modal} toggle={this.toggle} >
        <Col className="help">
          <h3>{this.state.header[this.state.language]}</h3>
          <p>{this.state.body[this.state.language]}</p>
        </Col>
      </ModalBody>
    )
  }
}
