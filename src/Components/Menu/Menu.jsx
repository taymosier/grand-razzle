import React, { Component } from 'react';
import { Col, Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';
import { MenuButton } from './MenuButton';
import './menu.css';
import buttons from './buttons.json'

export class Menu extends Component {

  render(){
    return(
      <Col
        className="menu"
        xl={{ size: 2, offset: 0 }}
        lg={{ size: 3, offset: 0 }}
        md={{ size: 3, offset: 0 }}
        sm={{ size: 3, offset: 0 }}
        xs={{ size: 3, offset: 0 }}
      >
        <ul className={"menu-button-list"}>
          {buttons.map((button) => { return <MenuButton button={button} key={button.label}/> })}
        </ul>
      </Col>
    )
  }
}
