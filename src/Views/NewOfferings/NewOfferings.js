import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class NewOfferings extends React.Component {
  render() {
    return (
      <Container className="NewOfferings">
        <Banner attrs={banners["new-offerings"]}/>
        <ContentTemplate view={"new-offerings"}/>
      </Container>
    );
  }
}

export default NewOfferings;
