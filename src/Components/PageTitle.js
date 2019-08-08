import React, { Component } from 'react';
import headers from '../Content/headers.json';
import './title.css'

export class PageTitle extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: null,
      view: null,
			langugage: this.props.language
    }
  }

  componentDidMount(){
    this.setState({
      header: headers[`${this.props.view}`][this.props.language],
      view: this.props.view
    })
  }

	componentDidUpdate(){
		if(this.props.language !== this.state.language){
			this.setState({
				header: headers[`${this.props.view}`][this.props.language],
				language: this.props.language
			})
		}
	}

  render(){
    if(this.state.view !== null){
      return( <div className={`${this.state.view}-title title`}>{this.state.header}</div> )
    }
    return null
  }
}
