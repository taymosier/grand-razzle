import React, { Component } from 'react';

export class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      style: {
        "minWidth": "100vw",
        "minHeight": "55vh",
        "maxWidth": "100vw",
        "background": "black",
        "width": "100vw",
        "position": "absolute",
        "zIndex": "-10000",
        "opacity": `${this.props.style.opacity}`,
        "position": "absolute"
      }
    }
  }

  render(){
    return(
      <div style={this.state.style}/>
    )
  }
}
