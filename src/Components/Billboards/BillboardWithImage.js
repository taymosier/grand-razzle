import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class BillboardWithImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
      href: this.props.billboard.link,
      active: 0,
      imageSrc: null
    }
  }

  componentDidMount(){
    if(this.props.billboard.thumbnail !== undefined ){
      typeof this.props.billboard.thumbnail === "string"
        ? this.setState({imageSrc: this.setThumbnail(this.props.billboard.thumbnail)})
        : this.setState({imageSrc: this.setThumbnail(this.props.billboard.thumbnail[parseInt(this.state.active)].src)})
    }
  }

  setThumbnail(thumbnail){
    return require(`../../../public/images/billboards/${thumbnail}`)
  }

  render(){
    return(
      <Row className="billboard with-image">
          <div className="contents">
            <div className="filter" />
            <Col
              xl={{ size: 5, offset: 0 }}
              lg={{ size: 5, offset: 0 }}
              md={{ size: 5, offset: 0}}
              sm={{ size: 5, offset: 0 }}
              xs={{ size: 5, offset: 0 }}
              className="image-col"
            >
              <div className="image-container">
                <img src={this.state.imageSrc} className="image"/>
              </div>
            </Col>
            <Col className="text-container"
              xl={{ size: 6, offset: 0 }}
              lg={{ size: 6, offset: 0 }}
              md={{ size: 6, offset: 0 }}
              sm={{ size: 6, offset: 0 }}
              xs={{ size: 6, offset: 0 }}
            >
              <p className="title">
                {this.state.title}
              </p>
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
