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
import { BillboardWithGallery } from './BillboardWithGallery';
import { BillboardWithBullets } from './BillboardWithBullets';
import { BillboardWithBulletsAndImage } from './BillboardWithBulletsAndImage';
import { BillboardTwoColumn } from './BillboardTwoColumn';





export class BillboardGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      billboard: this.props.billboard,
			language: this.props.language,
      type: this.props.billboard.type,
      hasThumbnail: this.hasThumbnail(this.props.billboard),
      hasLink: this.hasLink(this.props.billboard),
      isMap: this.isMap(this.props.billboard)
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
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
      return true;
    }
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
        return <BillboardWithGallery billboard={this.state.billboard} language={this.state.language}/>
        break;
			case "gallery":
        return <BillboardWithGallery billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "two-column":
        return <BillboardTwoColumn billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "bullets":
        return <BillboardWithBullets billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "bullets-with-image":
        return <BillboardWithBulletsAndImage billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "map":
        return <BillboardWithMap language={this.state.language}/>
        break;
      case "linked":
        return <LinkedBillboardWithImage billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "linked-no-image":
        return <LinkedBillboard billboard={this.state.billboard} language={this.state.language}/>
        break;
      case "no-image":
        return <Billboard billboard={this.state.billboard} language={this.state.language}/>
        break;
      default:
        return <div>Error Loading Billboard</div>
        break;
    }
  }
}
