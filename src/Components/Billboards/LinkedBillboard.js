import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { FlavorText } from './FlavorText';
import { BillboardButton } from './BillboardButton';

import './billboard.css';

export class LinkedBillboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.billboard.title.en !== "" ? this.props.billboard.title.en : null,
      subtitle: this.props.billboard.subtitle.en !== "" ? this.props.billboard.subtitle.en : null,
      text: this.props.billboard.text.en,
      href: this.props.billboard.link,
    }
  }

  render(){
    return(
      <Row className="billboard linked no-image">
        <div className={"contents"} >
          <Col className="text-container"
            xl={{ size: 12, offset: 0 }}
            lg={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={{ size: 12, offset: 0 }}
          >
            {this.state.title !== null ? <Title title={this.state.title} /> : null}
            {this.state.subtitle !== null ? <Subtitle subtitle={this.state.subtitle} /> : null}
            <FlavorText text={this.state.text} />
            <BillboardButton link={this.state.href} />
          </Col>
          <div className="filter" />
        </div>
      </Row>
    )
  }
}
