import React, { Component } from 'react';
import './flavorCard.css';

export class FlavorCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      flavor: this.props.flavor
    }
  }

  //splitText here

  render(){
    return(
      <div className={"flavor-card"}>
        <p className={"flavor-text"}>{this.state.flavor}</p>
      </div>
    )
  }
}
