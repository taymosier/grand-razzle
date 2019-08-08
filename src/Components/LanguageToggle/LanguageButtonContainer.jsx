import React, { Component } from 'react';
import { ButtonGroup } from 'reactstrap';
import { LanguageToggleButton } from './LanguageToggleButton';
import './languageToggle.css';

export class LanguageButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
			setLanguage: this.props.setLanguage,
			language: this.props.language
    };
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    let languages = [
      { value:"en", text:"English" },
      { value:"es", text:"Espanol" }
    ];

    let languageButtons = [];
    for(let language in languages){
      languageButtons.push(
				<LanguageToggleButton
					key={`${languages[language].value}`}
					value={languages[language].value}
					style={languages[language].value === this.props.language ? {"background": "#35768C"} : {"background": "#3f93b0"} }
					className={`button-language-${language}`}
					setLanguage={this.state.setLanguage}
					text={languages[language].text}
					language={this.state.language}
				/>
			)
    }
    return(<ButtonGroup className={"language-button-container"}>
            {languageButtons}
           </ButtonGroup>);
  }
}
