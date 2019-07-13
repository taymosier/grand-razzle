import React, { Component } from 'react';
import { CarouselImage } from './CarouselImage';

export class ImageCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: null
    }
  }

  render(){
    return(
      this.state.images !== null
      ? this.state.images.map(image) => {
          return <CarouselImage image={image} />
        }
      : null
    )
  }
}
