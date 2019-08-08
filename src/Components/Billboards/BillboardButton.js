import React, { Component } from 'react';

export class BillboardButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      href: this.props.link.href,
      label: this.props.link.label,
			language: this.props.language
    }
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    return (
      <a href={this.state.href} className="button">{this.state.label[this.state.language]}</a>
    )
  }
}
