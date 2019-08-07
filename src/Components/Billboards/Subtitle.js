import React, { Component } from 'react';

export class Subtitle extends Component {
  constructor(props){
    super(props);
    this.state = {
      subtitle: this.props.subtitle
    }
  }

	componentDidUpdate(){
		if(this.props.subtitle !== this.state.subtitle){
			this.setState({
				subtitle: this.props.subtitle
			})
		}
	}

  render(){
    return(
      <p className="subtitle">
        {this.state.subtitle}
      </p>
    )
  }
}
