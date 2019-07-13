import React, { Component } from 'react';

export class ThumbnailGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      thumbnails: null
    }
  }

  render(){
    return(
      { this.state.thumbnails !== null
        ? this.state.thumbnails.map(thumbnail) => {
            return <Thumbnail thumbnail={thumbnail} />
          }
        : null
      }
    )
  }
}
