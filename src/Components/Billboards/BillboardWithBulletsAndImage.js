import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { FlavorText } from './FlavorText';

export class BillboardWithBulletsAndImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
      href: this.props.billboard.link,
      active: 0,
      imageSrc: this.setThumbnail(this.props.billboard.thumbnail)
    }
  }

  setThumbnail(thumbnail){
    return require(`../../../public/images/billboards/${thumbnail}`)
  }

  render(){
    return(
      <Row className="billboard bullets with-image">
        <Col
          xl={{ size: 6, offset: 0 }}
          lg={{ size: 6, offset: 0 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 10, offset: 1 }}
          xs={{ size: 10, offset: 1 }}
          className="image-col"
        >
          <div className="image-container">
            <img src={this.state.imageSrc} className="image"/>
          </div>
        </Col>
        <Col className="text-container"
          xl={{ size: 6, offset: 0 }}
          lg={{ size: 6, offset: 0 }}
          md={{ size: 10, offset: 1 }}
          sm={{ size: 10, offset: 1 }}
          xs={{ size: 10, offset: 1 }}
        >
          <Title title={this.state.title} />
          <Subtitle subtitle={this.state.subtitle} />
          <FlavorText text={this.state.text} />
        </Col>
        <div className="filter" />
      </Row>
    )
  }
}
