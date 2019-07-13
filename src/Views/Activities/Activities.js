import React from 'react';
import { Banner } from '../../Components/Banners/Banner';
import { Menu } from '../../Components/Menu/Menu';
import { ContentTemplate } from '../ContentTemplate';
import { Col, Container, Row } from 'reactstrap';
var banners = require('../../Content/banners.json')

class Activities extends React.Component {
  render() {
    return (
      <Container className="Activities">
        <Banner attrs={banners.activities}/>
        <ContentTemplate view={"activities"}/>
      </Container>
    );
  }
}

export default Activities;
