import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { ContentTemplate } from './ContentTemplate';
var pages = require("./pages.json");


import './Styles/App.css';

function generateRouteComponent(page){
  return (
    <Route exact path={`${page.path}`} key={`${page.key}`} render={() => {return generateTemplate(`${page.view}`, `${page.banner}`)}} />
  )
}

function generateTemplate(view, banner){
  return <ContentTemplate view={`${view}`} banner={`${banner}`} />
}

const App = () => (
  <Switch>
    {pages.map((page) => {
      return generateRouteComponent(page)
    })}
  </Switch>
);

export default App;
