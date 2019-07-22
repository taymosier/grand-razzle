import React, { Component } from 'react';
import './thumbnails.css'
import { Col } from 'reactstrap';
import { ThumbnailImage } from './ThumbnailImage';

export class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.thumbnail.text,
      image: this.setThumbnailImage(this.props.thumbnail.image)
    }
  }

  setThumbnailImage(src){
    return require(`../../../public/images/thumbnails/${this.props.thumbnail.image}`)
  }

  render(){
    return(
      <Col
        className="thumbnail"
        style={{"backgroundImage": `url(${this.state.image})`}}
      >
        <p className="title">{this.state.text.title.en}</p>
        <div className="flavor-text">{this.state.text.flavor.en}</div>
        <div className="filter"></div>
      </Col>
    )
  }
}
