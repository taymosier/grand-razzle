import React, { Component } from 'react';

export class CarouselImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }

  componentDidMount(){
    this.setState({
      image: this.props.image
    })
  }

  render(){
    return(
      this.state.images !== null
      ? this.state.images.map(image) => {
          return <div>This is a carousel image</div>
        }
      : null
    )
  }
}
