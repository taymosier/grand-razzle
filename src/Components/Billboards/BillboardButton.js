import React, { Component } from 'react';

export class BillboardButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      href: this.props.link.href,
      label: this.props.link.label
    }
  }

  render(){
    return (
      <a href={this.state.href} className="button">{this.state.label}</a>
    )
  }
}
