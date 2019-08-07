import React, { Component } from 'react';
import { ButtonGroup } from 'reactstrap';
import { LanguageToggleButton } from './LanguageToggleButton';
import './languageToggle.css';

export class LanguageButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
			setLanguage: this.props.setLanguage
    };
  }


  render(){
    let languages = [
      { value:"en", text:"English" },
      { value:"es", text:"Espanol" }
    ];

    let languageButtons = [];
    for(let language in languages){
      languageButtons.push(<LanguageToggleButton key={`${languages[language].value}`} value={languages[language].value} className={`button-language-${language}`} setLanguage={this.state.setLanguage}  language={languages[language].text} />)
    }
    return(<ButtonGroup className={"language-button-container"}>
            {languageButtons}
           </ButtonGroup>);
  }
}
