import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ContactNavigator extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    let categories = ["Basic", "Itinerary", "Address"];
    let contents = [];
    for(let i = 0; i < categories.length; i++){
        contents.push(
          <Button
            className="contact-nav"
            style={
              {
                "float": "left",
                "background": `${this.state.active}` === `${categories[i]}` ? "#35768C" : "grey",
                "maxWidth": "fit-content",
                "margin": "1vh auto .5vh auto",
                "minWidth": "24%",
                "borderRadius": "0",
                "marginBottom": ".5vh"
              }
            }
            value={`${categories[i]}`}
            onClick={this.props.setActive}
          >
            {categories[i]}
          </Button>);
    }
    return(
      <div className="contact-nav" style={{"minWidth": "100%", "display": "flex"}}>
        {contents}
      </div>
    )
  }
}
