import React, { Component } from 'react';

export class HelpButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: this.props.toggle
    }
  }
  render(){
    return(
      <button onClick={this.state.toggle}>Help </button>
    )
  }
}
