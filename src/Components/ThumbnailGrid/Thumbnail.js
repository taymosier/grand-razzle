import React, { Component } from 'react';

export class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: this.props.thumbnail.image,
      text: this.props.thumbnail.text
    }

    render(){
      return(
        <div>
          <p>{this.state.text}</p>
        </div>
      )
    }
  }
}
