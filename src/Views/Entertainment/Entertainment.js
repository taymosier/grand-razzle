import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Entertainment extends React.Component {
  render() {
    return (
      <Container className="Entertainment">
        <Banner attrs={banners.entertainment}/>
        <Row className="main-row">
          <ContentTemplate view={"entertainment"}/>
        </Row>
      </Container>
    );
  }
}

export default Entertainment;
