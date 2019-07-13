import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class TwoBedroomSuite extends React.Component {
  render() {
    return (
      <Container className="TwoBedroomSuite">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"two-bedroom-suite"}/>
      </Container>
    );
  }
}

export default TwoBedroomSuite;
