import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

//Banner -> Row
//Menu -> Col

class Home extends React.Component {
  render() {

    return (
      <Container className="Home">
        <Banner attrs={banners.home}/>
        <ContentTemplate view={"home"}/>
      </Container>
    );
  }
}

export default Home;
