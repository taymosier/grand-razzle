import React, { Component } from 'react';

export class CarouselImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,

      nextImage: this.props.nextImage
    }
  }

  componentDidMount(){
    this.setState({
      image: this.props.image,
      style: {
        "backgroundImage": `url(${require("../../../public/images/galleries/" + this.props.image.folder + "/" + this.props.image.src)})`
      }
    })
  }

  render(){
    return(
      this.state.image !== null
      ? <div onClick={this.props.nextImage} style={this.state.style}>
          {this.state.image.src}
        </div>
      : null
    )
  }
}
