import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Spa extends React.Component {
  render() {
    return (
      <Container className="Spa">
        <Banner attrs={banners.spa}/>
        <ContentTemplate view={"spa"}/>
      </Container>
    );
  }
}

export default Spa;
