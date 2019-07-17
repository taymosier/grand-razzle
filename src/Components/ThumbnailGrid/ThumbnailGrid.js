import React, { Component } from 'react';
import { Thumbnail } from './Thumbnail';

export class ThumbnailGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      thumbnails: null,
      view: null
    }
  }

  componentDidMount(){
    if(this.props.thumbnails !== undefined && this.state.thumbnails !== this.props.thumbnails){
      this.setState({
        thumbnails: this.props.thumbnails,
        view: this.props.view
      })
    }
  }

  render(){
    return(
      this.state.thumbnails !== null
        ? this.state.thumbnails.map((thumbnail) => {
            return <Thumbnail thumbnail={thumbnail} folder={this.state.view} key={`${thumbnail.image}`}/>
          })
        : null

    )
  }
}
