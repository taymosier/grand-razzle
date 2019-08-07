import React, { Component } from 'react';

export class FlavorText extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    }
  }

	componentDidUpdate(){
		if(this.props.text !== this.state.text){
			this.setState({
				text: this.props.text
			})
		}
	}

  render(){
    return(
      <div className="flavor-text-container">
      {this.state.text !== undefined && typeof this.state.text === "object"
        ?  <ul>
          {
            this.state.text.map((block) => {
              return <li>
                        <p>
                          {block}
                        </p>
                     </li>
            })
          }
          </ul>
        : <p className="flavor-text">{this.state.text}</p>
      }
      </div>
    )
  }
}
