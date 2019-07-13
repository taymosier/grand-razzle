import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Golf extends React.Component {
  render() {
    return (
      <Container className="Golf">
        <Banner attrs={banners.golf}/>
        <ContentTemplate view={"golf"}/>
      </Container>
    );
  }
}

export default Golf;
