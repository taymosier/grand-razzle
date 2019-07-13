import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { ContentTemplate } from './ContentTemplate';
import { Sitemap } from './Sitemap';



import './Styles/App.css';

function generateTemplate(view, banner){
  return <ContentTemplate view={`${view}`} banner={`${banner}`} />
}

const App = () => (
  <Switch>
    <Route exact path="/" render={()=>{return generateTemplate("home", "home")}} />
    <Route exact path="/rooms" render={()=>{return generateTemplate("rooms", "rooms")}} />
    <Route exact path="/rooms/two-bedroom-suite" render={()=>{return generateTemplate("two-bedroom-suite", "rooms")}} />
    <Route exact path="/rooms/two-bedroom-presidential-villa" render={()=>{return generateTemplate("two-bedroom-presidential-villa", "rooms")}} />
    <Route exact path="/rooms/three-bedroom-presidential-villa" render={()=>{return generateTemplate("three-bedroom-presidential-villa", "rooms")}} />
    <Route exact path="/rooms/two-bedroom-spa-suite" render={()=>{return generateTemplate("two-bedroom-spa-suite", "rooms")}} />
    <Route exact path="/rooms/three-bedroom-spa-suite" render={()=>{return generateTemplate("three-bedroom-spa-suite", "rooms")}} />
    <Route exact path="/rooms/two-bedroom-residence-loft" render={()=>{return generateTemplate("two-bedroom-residence-loft", "rooms")}} />
    <Route exact path="/rooms/three-bedroom-residence-loft" render={()=>{return generateTemplate("three-bedroom-residence-loft", "rooms")}} />
    <Route exact path="/rooms/four-bedroom-residence" render={()=>{return generateTemplate("four-bedroom-residence", "rooms")}} />
    <Route exact path="/getting-here" render={()=>{return generateTemplate("getting-here", "getting-here")}} />
    <Route exact path="/dining" render={()=>{return generateTemplate("dining", "dining")}} />
    <Route exact path="/what-to-do" render={()=>{return generateTemplate("what-to-do", "what-to-do")}} />
    <Route exact path="/what-to-do/pools" render={()=>{return generateTemplate("pools","pools")}} />
    <Route exact path="/what-to-do/activities" render={()=>{return generateTemplate("activities", "activities")}} />
    <Route exact path="/golf" render={()=>{return generateTemplate("golf","golf")}} />
    <Route exact path="/spa" render={()=>{return generateTemplate("spa", "spa")}} />
    <Route exact path="/spa/spatium" render={()=>{return generateTemplate("spatium", "spa")}} />
    <Route exact path="/spa/brio-spa" render={()=>{return generateTemplate("brio-spa", "spa")}} />
    <Route exact path="/entertainment" render={()=>{return generateTemplate("entertainment","entertainment")}} />
    <Route exact path="/new-offerings" render={()=>{return generateTemplate("new-offerings", "new-offerings")}} />
    <Route exact path="/sitemap.xml" component={Sitemap} />
  </Switch>
);

export default App;
