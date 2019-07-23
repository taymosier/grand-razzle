import React, { Component } from 'react';
import { CarouselImage } from './CarouselImage';
import './gallery.css';

export class ImageCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: null,
      active: `${0}`
    }
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount(){
    this.setState({
      images: this.getImages(this.props.images),
      active: `${0}`
    })
  }

  nextImage(){
    let active = parseInt(this.state.active)+1;
    if(active !== this.state.images.length){
      this.setState({
        active: `${active}`
      })
    } else {
      this.setState({
        active: "0"
      })
    }
  }

  getImages(imageArray){
    let images = [];
    imageArray.map((image) => {
        images.push(
          <CarouselImage key={`${image.src}`} image={image} nextImage={this.nextImage}/>
        )
    });
    return images;
  }

  render(){
    if(this.state.images !== null && this.state.images !== undefined){
      return(
        <div className="carousel">
          {this.state.images[this.state.active]}
          <p className={"text"}>Click Image To Browse</p>
        </div>
      )
    }
    return <div></div>;
  }
}
