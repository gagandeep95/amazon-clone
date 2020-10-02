import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders.js";

const promise = loadStripe(
  "pk_test_51HR83qI9GBji4kvb5F0Y5glV6nORru58HdRsjrCHrIMe4Zpj9TYEAOEWUMQhAHCTwufQeKQCQAbbKbPcadXMoGph00NEtgw8e6"
)
 
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // it only run once when app componentloads
    auth.onAuthStateChanged(authUser => {
      console.log('auth use', authUser);
      if(authUser){
        // user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
                <Payment />    
            </Elements> 
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
       </div>
   
    </Router>
  );
}

export default App;
