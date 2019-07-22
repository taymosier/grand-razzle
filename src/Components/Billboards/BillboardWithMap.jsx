import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import MapsContainer from '../Map/MapsContainer.jsx';

export class BillboardWithMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapConfig: this.props.mapConfig,
      language: this.props.langugage
    }
  }

  componentDidUpdate(){
    if(this.state.mapConfig !== this.props.mapConfig){
      this.setState({
        mapConfig: this.props.mapConfig,
        language: this.props.language
      })
    }
  }
  render(){
    return(
      <Row className="billboard map">
          <Col
            className="left-col"
            xl={{ size: 8, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 10, offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={{ size: 10, offset: 1 }}
          >
          <MapsContainer className="mapContainer" mapConfig={this.state.mapConfig}/>
          </Col>
          <Col
            className="right-col"
            xl={{ size: 4, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 10, offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={{ size: 10, offset: 1 }}
          >
            <h5>Vidanta Nuevo Vallarta</h5>
            <p>Boulevard Riviera Nayarit #254 Bahia de Banderas, Nayarit CP 63735</p>
          </Col>
          <div className="filter" />
      </Row>
    )
  }
}
