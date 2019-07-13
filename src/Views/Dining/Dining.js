import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Dining extends React.Component {
  render() {
    return (
      <Container className="Dining">
        <Banner attrs={banners.dining}/>
        <ContentTemplate view={"dining"}/>
      </Container>
    );
  }
}

export default Dining;
