import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ContactNavigator extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    let categories = ["Basic", "Itinerary", "Address"];
    let contents = [];
    for(let i = 0; i < categories.length; i++){
        contents.push(
          <Button
            style={
              {
                "float": "left",
                "maxWidth": "fit-content",
                "margin": "0 auto",
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
      <div style={{"minWidth": "100%", "display": "flex"}}>
        {contents}
      </div>
    )
  }
}
