import React, { Component } from 'react';
import './billboard.css';
import './billboards_med.css';
import './billboards_sm.css';
import './billboards_xs.css';

import { Billboard } from './Billboard';
import { BillboardWithImage } from './BillboardWithImage';
import { LinkedBillboardWithImage } from './LinkedBillboardWithImage';
import { LinkedBillboard } from './LinkedBillboard';
import { BillboardWithMap } from './BillboardWithMap';
import { BillboardWithBullets } from './BillboardWithBullets';
import { BillboardWithBulletsAndImage } from './BillboardWithBulletsAndImage';




export class BillboardGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      billboard: this.props.billboard,
      type: this.props.billboard.type,
      hasThumbnail: this.hasThumbnail(this.props.billboard),
      hasLink: this.hasLink(this.props.billboard),
      isMap: this.isMap(this.props.billboard)
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

  isMap(billboard){
    if(billboard.type === "map"){
      return true;
    }
    return false;
  }

  render(){
    switch(this.state.type){
      case "default":
        return <BillboardWithImage billboard={this.state.billboard} />
        break;
      case "bullets":
        return <BillboardWithBullets billboard={this.state.billboard} />
        break;
      case "bullets-with-image":
        return <BillboardWithBulletsAndImage billboard={this.state.billboard} />
        break;
      case "map":
        return <BillboardWithMap />
        break;
      case "linked":
        return <LinkedBillboardWithImage billboard={this.state.billboard} />
        break;
      case "linked-no-image":
        return <LinkedBillboard billboard={this.state.billboard} />
        break;
      case "no-image":
        return <Billboard billboard={this.state.billboard} />
        break;
      default:
        return <div>Error Loading Billboard</div>
        break;
    }
  }
}
