import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class ThreeBedroomPresidentialVilla extends React.Component {
  render() {

    return (
      <Container className="ThreeBedroomPresidentialVilla">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"three-bedrooom-presidential-villa"}/>
      </Container>
    );
  }
}

export default ThreeBedroomPresidentialVilla;
