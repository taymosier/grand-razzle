import React, { Component } from 'react';

export class BillboardTextOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
      style: this.setThumbnail(this.props.billboard.thumbnail)
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  setThumbnail(thumbnail){
    return {
      "backgroundImage": `url(${require("../../../public/images/billboards/" + thumbnail)})`
    }
  }

  render(){
    return(
      <div className="billboard image-background">
        <div className="image" style={this.state.style}/>
        <div className="text-container">
          <p className="title">{this.state.title}</p>
          <p className="subtitle">{this.state.subtitle}</p>
          <p className="text">{this.state.text}</p>
        </div>
      </div>
    )
  }
}
