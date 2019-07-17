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
      style: null
    }
  }

  componentDidMount(){
    if(this.props.billboard.thumbnail !== undefined ){
      typeof this.props.billboard.thumbnail === "string"
        ? this.setState({style: this.setThumbnail(this.props.billboard.thumbnail)})
        : this.setState({style: this.setThumbnail(this.props.billboard.thumbnail[parseInt(this.state.active)].src)})
    }
  }

  setThumbnail(thumbnail){
    return {
      "backgroundImage": `url(${require("../../../public/images/billboards/" + thumbnail)})`
    }
  }

  render(){
    return(
      <Row className="billboard with-image">
          <div className="contents">
            <div className="filter" />
            <Col
              xl={{ size: 4, offset: 1 }}
              lg={{ size: 4, offset: 1 }}
              md={{ size: 4, offset: 1}}
              sm={{ size: 4, offset: 1 }}
              xs={{ size: 4, offset: 1 }}
              className="image-col"
            >
              <div className="billboardImage" style={this.state.style}/>
            </Col>
            <Col className="text-container"
              xl={{ size: 6, offset: 5 }}
              lg={{ size: 6, offset: 5 }}
              md={{ size: 6, offset: 5 }}
              sm={{ size: 6, offset: 5 }}
              xs={{ size: 6, offset: 5 }}
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
