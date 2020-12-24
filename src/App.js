
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';

import {Switch,Route} from 'react-router-dom';

function App() {
  return (    
    <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/Shop" component={ShopPage}/>
    </Switch>
  );
}

export default App;
