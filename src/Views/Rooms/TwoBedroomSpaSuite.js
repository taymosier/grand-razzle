import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class TwoBedroomSpaSuite extends React.Component {
  render() {

    return (
      <Container className="TwoBedroomSpaSuite">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"two-bedroom-spa-suite"}/>
      </Container>
    );
  }
}

export default TwoBedroomSpaSuite;
