import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';


export class BillboardTwoColumn extends Component {
  constructor(props){
    super(props);
    this.state = {
      colOne: this.props.billboard.colOne,
      colTwo: this.props.billboard.colTwo
    }
  }

  componentDidMount(){
    this.setState({
      colOne: this.props.billboard.colOne,
      colTwo: this.props.billboard.colTwo
    })
  }

  render(){
    return(
      <Row className="billboard two-column">
        <Col
          xl={{ size: 5, offset: 0 }}
          lg={{ size: 12, offset: 0 }}
          md={{ size: 12, offset: 0}}
          sm={{ size: 12, offset: 0 }}
          xs={{ size: 12, offset: 0 }}
          className="colOne"
        >
          {this.state.colOne.title !== undefined ? <h1 >{this.state.colOne.title}</h1> : null}
          <ul >
            {this.state.colOne.content.map((item) => {
                return <li >{item}</li>
            })}
          </ul>
        </Col>
        <Col
          xl={{ size: 7, offset: 0 }}
          lg={{ size: 12, offset: 0 }}
          md={{ size: 12, offset: 0}}
          sm={{ size: 12, offset: 0 }}
          xs={{ size: 12, offset: 0 }}
          className="colTwo"
        >
          {this.state.colTwo.title !== undefined ? <h1 >{this.state.colTwo.title}</h1> : null}
          <ul >
            {this.state.colTwo.content.map((item) => {
                return <li >{item}</li>
            })}
          </ul>
        </Col>
      </Row>
    )
  }
}
