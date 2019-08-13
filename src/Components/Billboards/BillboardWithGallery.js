import React, { Component } from 'react';
import {Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class BillboardWithGallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.billboard.title !== undefined ? this.props.billboard.title.en : null,
			subtitle: this.props.billboard.subtitle.en,
			text: this.props.billboard.text[this.props.language],
			href: this.props.billboard.link,
			active: 0,
			thumbnails: this.props.billboard.thumbnails,
			language: this.props.language,
			imageSrc: null
		}
		this.nextImage = this.nextImage.bind(this);
	}
	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				text: this.props.billboard.text[this.props.language],
				language: this.props.language
			})
		}
		if(this.state.imgSrc !== undefined && this.state.imgSrc !== this.state.thumbnails[parseInt(this.state.active)].src){
			console.log("updating gallery")
			this.setState({imageSrc: this.setThumbnail(this.state.thumbnails[parseInt(this.state.active)].src)})
		}
	}

  componentDidMount(){
    if(this.props.billboard.thumbnails !== undefined ){
      this.setState({imageSrc: this.setThumbnail(this.props.billboard.thumbnails[0].src)})
    }
  }

  setThumbnail(thumbnail){
    return require(`../../../public/images/billboards/${thumbnail}`)
  }

	nextImage(e){
		e.preventDefault();
		console.log('loading next image')
		let totalImages = this.state.thumbnails.length;
		let imageIndexToLoad = parseInt(this.state.active) + 1;
		{this.state.thumbnails.length === imageIndexToLoad ? imageIndexToLoad = 0 : null}

		this.setState({
			active: imageIndexToLoad,
			imageSrc: this.setThumbnail(this.state.thumbnails[imageIndexToLoad].src)
		})
	}

  render(){
		//TODO if this.state.text === Array() => map items
    return(
      <Row className="billboard with-image" onClick={this.nextImage}>
          <div className="contents">
            <div className="filter" />
            <Col
              xl={{ size: 5, offset: 0 }}
              lg={{ size: 12, offset: 0 }}
              md={{ size: 12, offset: 0}}
              sm={{ size: 12, offset: 0 }}
              xs={{ size: 12, offset: 0 }}
              className="image-col"
            >
              <div className="image-container">
                <img src={this.state.imageSrc} className="image" />
              </div>
            </Col>
            <Col className="text-container"
              xl={{ size: 6, offset: 0 }}
              lg={{ size: 12, offset: 0 }}
              md={{ size: 12, offset: 0 }}
              sm={{ size: 12, offset: 0 }}
              xs={{ size: 12, offset: 0 }}
            >
              {this.state.title !== null ? <p className="title">{this.state.title}</p> : null}
	              <p className="subtitle">
	                {this.state.subtitle}
	              </p>
              <div className="flavor-text-container">
                <p className="flavor-text">
                  {this.state.text}
                </p>
              </div>
            </Col>
          </div>
      </Row>
    )
  }
}
