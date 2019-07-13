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
    if(billboard.thumbnail !== ""){
      console.log('found thumbnail')
      return true;
    }
    console.log('thumbnail not found ')
    return false;
  }

  render(){
    return(
      <Row className="billboard">
          <div className="filter" />
          <Col className="text-container"
            xl={{ size: 6, offset: 3 }}
            lg={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
            sm={{ size: 6, offset: 3 }}
            xs={{ size: 6, offset: 3 }}
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
