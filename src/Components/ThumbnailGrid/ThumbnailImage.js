import React, { Component } from 'react';

export class ThumbnailImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      src: this.props.src
    }
  }

  render(){
    return(
      <img className={"thumbnail"} src={this.state.src} />
    )
  }
}
