import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import './flavorCard.css';

export class FlavorCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      flavor: this.props.flavor,
			language: this.props.language
    }
  }

	componentDidUpdate(){
		if(this.props.flavor !== this.state.flavor){
			this.setState({
				flavor: this.props.flavor
			})
		}
		if(this.props.language !== this.state.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  render(){
    return(
      <div className={"flavor-card"}>
        <div className="contents">
          <div className="card-filter" />
          <Col
            className="text-container"
            xl={{ size: 12, offset: 0 }}
            lg={{ size: 12, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
          {this.state.flavor !== undefined && typeof this.state.flavor === "object"
            ? this.state.flavor.map((block) => {
               return (
                <p className="flavor-text">
                  {block}
                </p>
              )
            })
            : <p className="flavor-text">{this.state.flavor}</p>
          }
          </Col>
        </div>
      </div>

    )
  }
}
