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
				language: this.props.language
    };
  }

	componentDidUpdate(){
		if(this.state.language !== this.props.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    return(
      <Col
        className="modals"
        xl={this.state.size.xl}
        lg={this.state.size.lg}
        md={this.state.size.md}
        sm={this.state.size.sm}
        xs={this.state.size.xs}
      >
        <MenuModal language={this.state.language} />
        <ContactModal language={this.state.language} />
        <HelpModal language={this.state.language} />
      </Col>
    );
  }
}
