import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class BrioSpa extends React.Component {
  render() {
    return (
      <Container className="BrioSpa">
        <Banner attrs={banners.spa}/>
        <ContentTemplate view={"brio-spa"}/>
      </Container>
    );
  }
}

export default BrioSpa;
