import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Menu } from './Menu/Menu';
import './menu.css';

export class MenuModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
			language: this.props.language
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.setState({
      icon: "./menu.png"
    })
  }

	componentDidUpdate(){
		if(this.state.language !== this.props.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }


  render(){
    return(
      <div className={"menu-toggle-container"}>
        <Button className={"menu-toggle"} onClick={this.toggle}>
          {this.state.icon !== undefined ? <img src={require(`${this.state.icon}`)} /> : null }
        </Button>
        <Modal className="menu" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalBody isOpen={this.state.modal} toggle={this.toggle}>
            <Menu />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
