import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class Billboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
      href: this.props.billboard.link
    }
  }

  hasThumbnail(billboard){
		 return billboard.thumbnail !== "" ? true : false
  }

  render(){
    return(
      <Row className="billboard no-image">
          <div className="filter" />
          <Col className="text-container"
            xl={{ size: 10, offset: 1 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 10, offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={{ size: 12, offset: 0 }}
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
      </Row>
    )
  }
}
