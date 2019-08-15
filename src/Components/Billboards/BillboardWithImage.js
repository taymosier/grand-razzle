import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class BillboardWithImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.billboard.title !== undefined ? this.props.billboard.title.en : null,
      subtitle: this.props.billboard.subtitle.en,
      text: this.setText(this.props.language),
      href: this.props.billboard.link,
      active: 0,
			language: this.props.language,
      imageSrc: null
    }
		this.setText = this.setText.bind(this);
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				text: this.setText(this.props.language),
				language: this.props.language
			})
		}
	}

  componentDidMount(){
    if(this.props.billboard.thumbnail !== undefined ){
      typeof this.props.billboard.thumbnail === "string"
        ? this.setState({imageSrc: this.setThumbnail(this.props.billboard.thumbnail)})
        : this.setState({imageSrc: this.setThumbnail(this.props.billboard.thumbnail[parseInt(this.state.active)].src)})
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

  render(){
		//TODO if this.state.text === Array() => map items
    return(
      <Row className="billboard with-image">
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
                <img src={this.state.imageSrc} className="image"/>
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
                {this.state.text}
              </div>
            </Col>
          </div>
      </Row>
    )
  }
}
