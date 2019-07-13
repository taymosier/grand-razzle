import React, { Component } from 'react';
import './billboard.css';
import { Billboard } from './Billboard';
import { BillboardWithImage } from './BillboardWithImage';
import { LinkedBillboardWithImage } from './LinkedBillboardWithImage';


export class BillboardGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      billboard: this.props.billboard,
      hasThumbnail: this.hasThumbnail(this.props.billboard),
      hasLink: this.hasLink(this.props.billboard)
    }
  }

  hasThumbnail(billboard){
    if(billboard.thumbnail !== ""){
      return true;
    }
    return false;
  }

  hasLink(billboard){
    if(billboard.link !== ""){
      console.log(`billboard link: ${billboard.link}`)
      return true;
    }
    console.log('Does not have link')
    return false;
  }

  render(){
    if(this.state.hasLink && this.state.hasThumbnail){
      return <LinkedBillboardWithImage billboard={this.state.billboard} />
    }
    if(this.state.hasThumbnail){
      return <BillboardWithImage billboard={this.state.billboard} />
    }
    return <Billboard billboard={this.state.billboard} />
  }
}
