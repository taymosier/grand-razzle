import React, { Component } from 'react';
import {Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class BillboardWithGallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.billboard.title !== undefined ? this.props.billboard.title.en : null,
			subtitle: this.props.billboard.subtitle.en,
			text: this.setText(this.props.language),
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
				text: this.setText(this.props.language),
				language: this.props.language
			})
		}
		if(this.state.imgSrc !== undefined && this.state.imgSrc !== this.state.thumbnails[parseInt(this.state.active)].src){
			let activeIndex = parseInt(this.state.active)
			this.setState({
				imageSrc: this.setThumbnail(this.state.thumbnails[activeIndex].src)
			})
		}
	}

  componentDidMount(){
    if(this.props.billboard.thumbnails !== undefined ){
      this.setState({
				imageSrc: this.setThumbnail(this.props.billboard.thumbnails[0].src)
			})
    }
  }

	setText(language){
		// if the flavor text is an array of strings, map through each one and return an array of <p> elements,
		// otherwise, if the flavor text is a single string, it will be returned as a single <p> element

		let textArray = [];
		if(typeof this.props.billboard.text[language] === "object"){
			this.props.billboard.text[language].map((block) => {
				textArray.push(
					<p className="flavor-text">{block}</p>
				)
			})
		} else {
			return <p className="flavor-text">{this.props.billboard.text[language]}</p>
		}
		return textArray;
	}

  setThumbnail(thumbnail){
    return require(`../../../public/images/billboards/${thumbnail}`)
  }

	nextImage(e){
		// Gets the total number of images [totalImages], and then compares what would be the index of the next image in the list.
		// If that number equals the total number of images in the thumbnails array, then we know we are at the end of the array
		// and set the index of the image to be loaded to 0, i.e, start over at the beginning of the array. Finally, the new state is set.
		e.preventDefault();
		let totalImages = this.state.thumbnails.length;
		let imageIndexToLoad = parseInt(this.state.active) + 1;
		{this.state.thumbnails.length === imageIndexToLoad ? imageIndexToLoad = 0 : null}

		this.setState({
			active: imageIndexToLoad,
			imageSrc: this.setThumbnail(this.state.thumbnails[imageIndexToLoad].src)
		})
	}

  render(){
    return(
      <Row className="billboard with-gallery" onClick={this.nextImage}>
          <div className="contents">
            <div className="filter" />
            <Col
              xl={{ size: 6, offset: 0 }}
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
							{this.state.subtitle !== null && this.state.subtitle !== "" ? <p className="subtitle">{this.state.subtitle}</p> : null}
              <div className="flavor-text-container">
                  {this.state.text}
              </div>
            </Col>
          </div>
      </Row>
    )
  }
}
