import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { FlavorText } from './FlavorText';
import { BillboardButton } from './BillboardButton';

import './billboard.css';

export class LinkedBillboardWithImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
      href: this.props.billboard.link,
      imageSrc: this.setThumbnail(this.props.billboard.thumbnail)
    }
  }

  setThumbnail(thumbnail){
    return require(`../../../public/images/billboards/${thumbnail}`)
  }

  render(){
    return(
      <Row className="billboard linked with-image">
        <div className={"contents"} >
          <Col
            xl={{ size: 5, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
            className="image-col"
          >
            <div className="image-container">
              <img className="image" src={this.state.imageSrc} />
            </div>
          </Col>
          <Col className="text-container"
            xl={{ size: 6, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
            <Title title={this.state.title} />
            <Subtitle subtitle={this.state.subtitle} />
            <FlavorText text={this.state.text} />
            { this.state.href !== undefined && this.state.href !== ""
              ? <BillboardButton link={this.state.href} />
              : null
            }
          </Col>
          <div className="filter" />
        </div>
      </Row>
    )
  }
}
