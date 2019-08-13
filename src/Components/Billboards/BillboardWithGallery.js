import React, { Component } from 'react';
import {Button, Col, Row } from 'reactstrap';
import './billboard.css';

export class BillboardWithGallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.billboard.title !== undefined ? this.props.billboard.title.en : null,
			subtitle: this.props.billboard.subtitle.en,
			text: this.props.billboard.text[this.props.language],
			href: this.props.billboard.link,
			active: 0,
			language: this.props.language,
			imageSrc: null
		}
	}

	render(){
		return(
			null
		)
	}
}
