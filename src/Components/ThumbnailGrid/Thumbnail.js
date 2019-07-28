import React, { Component } from 'react';
import './thumbnails.css'
import { Col } from 'reactstrap';
import { ThumbnailImage } from './ThumbnailImage';

export class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.thumbnail.text,
      image: this.setThumbnailImage(this.props.thumbnail.image),
      src: this.props.thumbnail.image
    }
  }

  setThumbnailImage(src){
    return require(`../../../public/images/thumbnails/${this.props.thumbnail.image}`)
  }

  render(){
    return(
      <Col
        className="thumbnail"
      >
        <img className="thumbnail" src={`${require(`../../../public/images/thumbnails/${this.state.src}`)}`} />
        <div className="content">
          <p className="title">{this.state.text.title.en}</p>
          <div className="flavor-text">{this.state.text.flavor.en}</div>
        </div>
        <div className="filter"></div>

      </Col>
    )
  }
}
