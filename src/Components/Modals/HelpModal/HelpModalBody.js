import React, { Component } from 'react';
import { Col, ModalBody } from 'reactstrap';

export class HelpModalBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      toggle: this.props.toggle,
      header: this.props.step.header,
      body: this.props.step.body
    }
  }

  componentDidUpdate(){
    if(this.state.header !== this.props.step.header){
      this.setState({
        header: this.props.step.header,
        body: this.props.step.body
      })
    }
  }



  render(){

    return(
      <ModalBody className="help" isOpen={this.state.modal} toggle={this.toggle} >
        <Col className="help">
          <h3>{this.state.header}</h3>
          <p>{this.state.body}</p>
        </Col>
      </ModalBody>
    )
  }
}
