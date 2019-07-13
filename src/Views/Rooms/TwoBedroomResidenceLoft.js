import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class TwoBedroomResidenceLoft extends React.Component {
  render() {

    return (
      <Container className="TwoBedroomResidenceLoft">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"two-bedroom-residence-loft"}/>
      </Container>
    );
  }
}

export default TwoBedroomResidenceLoft;
