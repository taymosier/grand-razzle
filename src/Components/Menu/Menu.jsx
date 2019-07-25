import React, { Component } from 'react';
import { Col, Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';
import { ContactModal } from '../Modals/ContactForm/ContactModal';
import { MenuButton } from './MenuButton';
import './menu.css';
import buttons from './buttons.json'

export class Menu extends Component {
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
        collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    })
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
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar}/>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className={"menu-button-list"}>
                {buttons.map((button) => { return <MenuButton button={button} key={button.label}/> })}
              </Nav>
            </Collapse>
        </Navbar>
        <ContactModal />
      </Col>
    )
  }
}
