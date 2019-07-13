import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class ThreeBedroomSpaSuite extends React.Component {
  render() {

    return (
      <Container className="ThreeBedroomSpaSuite">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"three-bedroom-spa-suite"}/>
      </Container>
    );
  }
}

export default ThreeBedroomSpaSuite;
