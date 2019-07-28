import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import { MenuModal } from '../Modals/MenuModal/MenuModal'
import { ContactModal } from '../Modals/ContactForm/ContactModal';
import { HelpModal } from '../Modals/HelpModal/HelpModal'

export class Modals extends Component {
  constructor(props){
    super(props);
    this.state = {
        size: {
          "xl": { "size": "2",  "offset": "0" },
          "lg": { "size": "3",  "offset": "0" },
          "md": { "size": "0", "offset": "0" },
          "sm": { "size": "0", "offset": "0" },
          "xs": { "size": "12", "offset": "0" }
        },
    };
  }
  render(){
    return(
      <Col
        className="menu"
        xl={this.state.size.xl}
        lg={this.state.size.lg}
        md={this.state.size.md}
        sm={this.state.size.sm}
        xs={this.state.size.xs}
      >
        <MenuModal />
        <ContactModal />
        <HelpModal />
      </Col>
    );
  }
}
