import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { BillboardGenerator } from './Components/Billboards/BillboardGenerator';
import { Banner } from './Components/Banners/Banner';
import { PageTitle } from './Components/PageTitle';
import { FlavorCard } from './Components/FlavorCard/FlavorCard';
import { ImageCarousel } from './Components/Carousel/ImageCarousel';
import { ThumbnailGrid } from './Components/ThumbnailGrid/ThumbnailGrid';
import { Modals } from './Components/Modals/Modals'


import galleries from './Content/galleries.json';
import thumbnailGrids from './Content/thumbnail_grids.json'
import billboards from './Content/billboards.json';
import flavorTexts from './Content/flavor.json';
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
      view: null
    }
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

  render(){
    if(this.state.view !== undefined){
      return(
        <Container className={`${this.state.view}-page`}>
          <Banner attrs={banners[`${this.props.banner}`]}/>
          <Row >
            <Modals />
            <Col
              className="main-content"
              xl={{ size: 9, offset: 0 }}
              lg={{ size: 9, offset: 0 }}
              md={{ size: 12, offset: 0 }}
              sm={{ size: 12, offset: 0 }}
              xs={{ size: 12, offset: 0 }}
            >
              {this.state.view !== null
                ? <PageTitle view={this.state.view} />
                : null
              }
              {this.state.flavor !== null
                ? this.state.flavor.map((text) => {
                    return <FlavorCard flavor={text["en"]} />
                  })
                : null
              }
              {this.state.gallery !== null
                ? <ImageCarousel  images={this.state.gallery}/>
                : null
              }
              {this.state.billboards !== null
                ? this.state.billboards.map((billboard) => {
                    console.log(typeof billboard)
                    return <BillboardGenerator key={billboard.title["en"]} billboard={billboard} />
                  })
                : null
              }
              {this.state.thumbnails !== null
                ? <ThumbnailGrid view={this.state.view} thumbnails={this.state.thumbnails}/>
                : null
              }
            </Col>
          </Row>
        </Container>
      )
    }
    return null;
  }
}
