import React, { Component } from 'react';

export class BillboardButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      link: this.props.link,
      label: this.props.label
    }
  }

  render(){
    return (
      <a href={this.state.link} className="button">{this.state.label}</a>
    )
  }
}
