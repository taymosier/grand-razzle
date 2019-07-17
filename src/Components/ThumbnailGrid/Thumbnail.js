import React, { Component } from 'react';

export class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.thumbnail.text,
      style: this.setThumbnail(this.props.thumbnail.image)
    }
  }

  setThumbnail(src){
    return {
      "backgroundImage": `url(${require("../../../public/images/thumbnails/" + src)})`
    }
  }

  render(){
    return(
      <div className="thumbnail" style={this.state.style}>
        <p className="title">{this.state.text.title.en}</p>
        <p className="flavor-text">{this.state.text.flavor.en}</p>
      </div>
    )
  }
}
