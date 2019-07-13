import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Pools extends React.Component {
  render() {
    return (
      <Container className="Pools">
        <Banner attrs={banners.pools}/>
        <ContentTemplate view={"pools"}/>
      </Container>
    );
  }
}

export default Pools;
