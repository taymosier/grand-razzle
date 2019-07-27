import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class HelpNavigator extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfSteps: this.props.steps.length,
      setActive: this.props.setActive,
      active: this.props.active
    }
  }

  componentDidUpdate(){
    if(this.props.active !== undefined && this.state.active !== this.props.active){
      this.setState({
        active: this.props.active
      })
    }
  }

  render(){
    let contents = [];
    for(let i = 0; i < this.state.numberOfSteps; i++){
        contents.push(
          <Button
            style={
              {
                "float": "left",
                "background": `${this.state.active}` === `${i}` ? "black" : "grey",
                "maxWidth": "fit-content",
                "margin": "0 auto",
                "minWidth": "24%",
                "borderRadius": "0",
                "marginBottom": ".5vh"
              }
            }
            value={i}
            onClick={this.props.setActive}
          >
            {i+1}
          </Button>);
    }
    return(
      <div style={{"minWidth": "100%", "display": "flex"}}>
        {contents}
      </div>
    )
  }
}
