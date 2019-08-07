import React, { Component } from 'react';

export class Title extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
  }

	componentDidUpdate(){
		if(this.props.title !== this.state.title){
			this.setState({
				title: this.props.title
			})
		}
	}

  render(){
    return(
      <p className="title">
        {this.state.title}
      </p>
    )
  }
}
