import React, { Component } from 'react';

export class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: "",
      href: "",
      style: {
        "listStyle": "none"
      }
    }
  }
  componentDidMount(){
    this.setState({
      label: this.props.button.label,
      href: this.props.button.href
    })
  }
  render(){
    return(
      <li style={this.state.style} className="menu-item" key={this.state.label}>
          <a href={`${this.state.href}`} className={`button ${this.state.label}-menu-button menu-button`}>{this.state.label}</a>
      </li>
    )
  }
}
