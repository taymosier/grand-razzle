import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from './Views/Home/Home';
import Rooms from './Views/Rooms/Rooms';
import GettingHere from './Views/GettingHere/GettingHere';
import Dining from './Views/Dining/Dining';
import Activities from './Views/Activities/Activities';
import Golf from './Views/Golf/Golf';
import Entertainment from './Views/Entertainment/Entertainment';
import NewOfferings from './Views/NewOfferings/NewOfferings';
import Spa from './Views/Spa/Spa';
import Spatium from './Views/Spa/Spatium';
import BrioSpa from './Views/Spa/BrioSpa';
import Pools from './Views/Pools/Pools';
import TwoBedroomSuite from './Views/Rooms/TwoBedroomSuite';
import TwoBedroomPresidentialVilla from './Views/Rooms/TwoBedroomPresidentialVilla';
import ThreeBedroomPresidentialVilla from './Views/Rooms/ThreeBedroomPresidentialVilla';
import TwoBedroomSpaSuite from './Views/Rooms/TwoBedroomSpaSuite';
import ThreeBedroomSpaSuite from './Views/Rooms/ThreeBedroomSpaSuite';
import TwoBedroomResidenceLoft from './Views/Rooms/TwoBedroomResidenceLoft';
import ThreeBedroomResidenceLoft from './Views/Rooms/ThreeBedroomResidenceLoft';
import FourBedroom from './Views/Rooms/FourBedroom';


import './Styles/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/rooms/two-bedroom-suite" component={TwoBedroomSuite} />
    <Route exact path="/rooms/two-bedroom-presidential-villa" component={TwoBedroomPresidentialVilla} />
    <Route exact path="/rooms/three-bedroom-presidential-villa" component={ThreeBedroomPresidentialVilla} />
    <Route exact path="/rooms/two-bedroom-spa-suite" component={TwoBedroomSpaSuite} />
    <Route exact path="/rooms/three-bedroom-spa-suite" component={ThreeBedroomSpaSuite} />
    <Route exact path="/rooms/two-bedroom-residence-loft" component={TwoBedroomResidenceLoft} />
    <Route exact path="/rooms/three-bedroom-residence-loft" component={ThreeBedroomResidenceLoft} />
    <Route exact path="/rooms/four-bedroom-residence" component={FourBedroom} />
    <Route exact path="/getting-here" component={GettingHere} />
    <Route exact path="/dining" component={Dining} />
    <Route exact path="/what-to-do" component={Activities} />
    <Route exact path="/what-to-do/pools" component={Pools} />
    <Route exact path="/what-to-do/activities" component={Activities} />
    <Route exact path="/golf" component={Golf} />
    <Route exact path="/spa" component={Spa} />
    <Route exact path="/spa/spatium" component={Spatium} />
    <Route exact path="/spa/brio-spa" component={BrioSpa} />
    <Route exact path="/entertainment" component={Entertainment} />
    <Route exact path="/new-offerings" component={NewOfferings} />
  </Switch>
);

export default App;
