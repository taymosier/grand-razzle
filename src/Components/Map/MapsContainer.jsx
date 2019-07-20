import React, { Component } from 'react';
import { Map } from './Map.jsx'
import { GoogleApiWrapper } from 'google-maps-react';

//Grand

export class MapsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      google: this.props.google
    }
  }

  componentDidUpdate(){
    if(this.state.google !== this.props.google){
      this.setState({
        google: this.props.google
      })
    }
  }
  render(){
    return(
      <div className="wrapper">
          <Map google={this.props.google}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBWhgQaAgjS-v4bSzPIADVTvGEbrQhsQ0c')
}) (MapsContainer)
