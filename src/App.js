import React, { Component } from 'react';
import { WeaponStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ShopConnector } from "./weaponShop/ShopConnector";

export default class App extends Component{
  render() {
    return <Provider store={ WeaponStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/shop" component={ ShopConnector } />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  }
}
