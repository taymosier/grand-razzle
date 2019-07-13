import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { BillboardGenerator } from '../Components/Billboards/BillboardGenerator';
import { Banner } from '../Components/Banners/Banner';
import { Menu } from '../Components/Menu/Menu';
import { PageTitle } from '../Components/PageTitle';
import { FlavorCard } from '../Components/FlavorCard/FlavorCard';
import galleries from '../Content/galleries.json';
import thumbnailGrids from '../Content/thumbnail_grids.json'
import billboards from '../Content/billboards.json';
import flavorTexts from '../Content/flavor.json';
import '../Styles/index.css';



export class ContentTemplate extends Component {
  constructor(props){
    super(props)
    this.state = {
      billboards: null,
      carousel: null,
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
    if(galleries[`${view}`] !== undefined && galleries[`${view}`] !== null){
      return galleries[`${view}`]
    }
    return null
  }

  checkForBillboards(view){
    if(billboards[`${view}`] !== undefined && billboards[`${view}`] !== null){
      return billboards[`${view}`]
    }
    return null
  }

  checkForThumbnailGrid(view){
    if(thumbnailGrids[`${view}`] !== undefined && thumbnailGrids[`${view}`] !== null){
      return thumbnailGrids[`${view}`]
    }
    return null
  }

  checkForFlavorText(view){
    if(flavorTexts[`${view}`] !== undefined){
      return flavorTexts[`${view}`]
    }
    return null
  }

  render(){
    return(
        <Row >
          <Menu />
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
            {this.state.carousel !== null
              ? <ImageCarousel  images={this.state.carousel}/>
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
              ? <ThumbnailGrid thumbnails={this.state.thumbnails}/>
              : null
            }
          </Col>
        </Row>
    )
  }
}
