import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class LanguageToggleButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      text: this.props.text,
			style: this.props.style,
			language: this.props.language
    };
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
		if(this.props.style !== this.state.style){
			this.setState({
				style: this.props.style
			})
		}
	}

  render(){
    return(
      <Button
        id={`languageToggleButton`}
        className="language-toggle-button"
        value={this.props.value}
        onClick={(e) => {this.props.setLanguage(e)}}
				style={this.state.style}
      >
        {this.state.text}
      </Button>
    );
  }
}
