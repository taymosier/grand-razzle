import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import { MenuModal } from '../Modals/MenuModal/MenuModal'
import { ContactModal } from '../Modals/ContactForm/ContactModal';
import { HelpModal } from '../Modals/HelpModal/HelpModal'
import { LanguageButtonContainer } from '../LanguageToggle/LanguageButtonContainer';
import './modal.css';


export class Modals extends Component {
  constructor(props){
    super(props);
    this.state = {
        size: {
          "xl": { "size": "12",  "offset": "0" },
          "lg": { "size": "12",  "offset": "0" },
          "md": { "size": "12", "offset": "0" },
          "sm": { "size": "12", "offset": "0" },
          "xs": { "size": "12", "offset": "0" }
        },
				language: this.props.language,
				setLanguage: this.props.setLanguage
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
				<LanguageButtonContainer setLanguage={this.state.setLanguage} language={this.state.language}/>

      </Col>
    );
  }
}
