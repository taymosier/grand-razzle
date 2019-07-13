import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class TwoBedroomPresidentialVilla extends React.Component {
  render() {

    return (
      <Container className="TwoBedroomPresidentialVilla">
        <Banner attrs={banners.rooms}/>
        <ContentTemplate view={"two-bedroom-presidential-villa"}/>
      </Container>
    );
  }
}

export default TwoBedroomPresidentialVilla;
