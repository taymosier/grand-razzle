import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { FlavorText } from './FlavorText';

export class BillboardWithBullets extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: this.props.billboard.title.en,
      subtitle: this.props.billboard.subtitle.en,
      text: this.props.billboard.text.en,
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    return(
      <Row className="billboard bullets">
        <Col className="text-container"
          xl={{ size: 10, offset: 1 }}
          lg={{ size: 10, offset: 1 }}
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
