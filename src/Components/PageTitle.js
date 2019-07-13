import React, { Component } from 'react';
import headers from '../Content/headers.json';
import './title.css'

export class PageTitle extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: null,
      view: null
    }
  }

  componentDidMount(){
    this.setState({
      header: headers[`${this.props.view}`]["en"],
      view: this.props.view
    })
  }

  render(){
    if(this.state.view !== null){
      return( <div className={`${this.state.view}-title title`}>{this.state.header}</div> )
    }
    return null
  }
}
