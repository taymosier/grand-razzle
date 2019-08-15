import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { BillboardGenerator } from './Components/Billboards/BillboardGenerator';
import { Banner } from './Components/Banners/Banner';
import { PageTitle } from './Components/PageTitle';
import { FlavorCard } from './Components/FlavorCard/FlavorCard';
import { ImageCarousel } from './Components/Carousel/ImageCarousel';
import { ThumbnailGrid } from './Components/ThumbnailGrid/ThumbnailGrid';
import { Modals } from './Components/Modals/Modals'
import { LanguageButtonContainer } from './Components/LanguageToggle/LanguageButtonContainer';


import galleries from './Content/galleries.json';
import thumbnailGrids from './Content/thumbnail_grids.json'
import billboards from './Content/billboards.json';
import flavorTexts from './Content/flavor.json';
import footer from './footer.css';
import './Styles/index.css';
var banners = require('./Content/banners.json')



export class ContentTemplate extends Component {
  constructor(props){
    super(props)
    this.state = {
      billboards: null,
      gallery: null,
      thumbnails: null,
      flavor: null,
      view: null,
			language: "en"
    }
		this.setLanguage = this.setLanguage.bind(this);
  }

  componentDidMount(){
    let view;
    if(this.props !== undefined && this.props !== null){
      view = this.props.view;
      this.setState({
        billboards: this.checkForBillboards(view),
        gallery: this.checkForGallery(view),
        thumbnails: this.checkForThumbnailGrid(view),
        flavor: this.checkForFlavorText(view),
        view: this.props.view
      })
    }
  }

  checkForGallery(view){
    return galleries[`${view}`] !== undefined && galleries[`${view}`] !== null
      ? galleries[`${view}`]
      : null
  }

  checkForBillboards(view){
    return billboards[`${view}`] !== undefined && billboards[`${view}`] !== null
      ? billboards[`${view}`]
      : null
  }

  checkForThumbnailGrid(view){
    return thumbnailGrids[`${view}`] !== undefined && thumbnailGrids[`${view}`] !== null
      ? thumbnailGrids[`${view}`]
      : null
  }

  checkForFlavorText(view){
    return flavorTexts[`${view}`] !== undefined
      ? flavorTexts[`${view}`]
      : null
  }

	setLanguage(e){
    e.preventDefault();
    this.setState({
      language: `${e.target.value}`
    });
  }

  render(){
    if(this.state.view !== undefined){
      return(
        <Container className={`${this.state.view}-page`}>
					<Modals language={this.state.language} setLanguage={this.setLanguage}/>
          <Banner attrs={banners[`${this.props.banner}`]}/>
          <Row >
            <Col
              className="main-content"
              xl={{ size: 10, offset: 1 }}
              lg={{ size: 10, offset: 1 }}
              md={{ size: 10, offset: 1 }}
              sm={{ size: 12, offset: 0 }}
              xs={{ size: 12, offset: 0 }}
            >
              {this.state.view !== null
                ? <PageTitle view={this.state.view} language={this.state.language}/>
                : null
              }
              {this.state.flavor !== null
                ? this.state.flavor.map((text) => {
                    return <FlavorCard flavor={text[`${this.state.language}`]} language={this.state.language} />
                  })
                : null
              }
              {this.state.gallery !== null
                ? <ImageCarousel  images={this.state.gallery}/>
                : null
              }
              {this.state.billboards !== null
                ? this.state.billboards.map((billboard) => {
                    return <BillboardGenerator key={billboard.key} billboard={billboard} language={this.state.language}/>
                  })
                : null
              }
              {this.state.thumbnails !== null
                ? <ThumbnailGrid view={this.state.view} thumbnails={this.state.thumbnails} language={this.state.language}/>
                : null
              }
            </Col>
						<Row className="footer">
							<p>Mexico Grand Luxury Rentals Inc.</p>
						</Row>
          </Row>
        </Container>
      )
    }
    return null;
  }
}
