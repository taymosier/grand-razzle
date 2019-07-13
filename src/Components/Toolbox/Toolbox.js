import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { HelpModal } from '../HelpForm/HelpModal';
import { HelpButton } from '../HelpForm/HelpButton';

export class Toolbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      help: true
    }
    this.toggleHelp = this.toggleHelp.bind(this);
  }

  toggleHelp(){
    this.setState({
      help: !this.state.help
    })
  }

  render(){
    return(
      <Col onClick={this.toggleHelp} className={"toolbox"}>
        {this.state.help ? <HelpModal isOpen={this.state.help} toggle={this.toggleHelp}/> : <HelpButton toggle={this.toggleHelp} />}
      </Col>
    )
  }
}
