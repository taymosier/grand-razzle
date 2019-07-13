import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class FourBedroom extends React.Component {
  render() {

    return (
      <Container className="FourBedroom">
        <Banner attrs={banners.home}/>
        <ContentTemplate view={"home"}/>
      </Container>
    );
  }
}

export default FourBedroom;
