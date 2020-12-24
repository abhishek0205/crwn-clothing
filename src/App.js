import React from 'react';

import './App.css';
import Header from './component/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';

import {Switch,Route} from 'react-router-dom';

function App() {
  return (  
    <React.Fragment>
      <Header/>
    <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/Shop" component={ShopPage}/>
    </Switch>
    </React.Fragment>  
  );
}

export default App;
