import React, { Component } from 'react';

export class FlavorText extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    }
  }

  render(){
    return(
      <div className="flavor-text-container">
        <p className="flavor-text">
          {this.state.text}
        </p>
      </div>
    )
  }
}
