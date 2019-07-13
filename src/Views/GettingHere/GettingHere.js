import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class GettingHere extends React.Component {
  render() {
    return (
      <Container className="Rooms">
        <Banner attrs={banners["getting-here"]}/>
        <ContentTemplate view={"getting-here"}/>
      </Container>
    );
  }
}

export default GettingHere;
