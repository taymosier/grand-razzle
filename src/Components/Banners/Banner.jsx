import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Filter } from '../Filter'
import './banners.css';

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      view: "",
      style: {
        "backgroundImage": ""
      }
    }
  }

  componentDidMount(){
    this.setState({
      title: this.props.attrs.title,
      subtitle: this.props.attrs.subtitle,
      image: this.props.attrs.image,
      view: this.props.attrs.view,
      style: {
        "backgroundImage": `url(${require("../../../public/images/banners/" + this.props.attrs.image)})`
      }
    })
  }

  render(){
    return(
      <Row>
        <Col
          className={`${this.state.view}-banner banner`}
            xl={{ size: 12, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
            style={this.state.style}
        >
        <Filter />
        <div className="banner-text">
          <h1>{this.state.title}</h1>
          <h2>{this.state.subtitle}</h2>
        </div>
        </Col>
      </Row>
    )
  }
}
