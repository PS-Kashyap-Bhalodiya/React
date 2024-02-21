import './App.css';
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Home from "./component/Home"
import Nav from './component/Nav';
import About from './component/About';
import PageNotFound from './component/PageNotFound';
import User from './component/User';

import GetMethod from './component/GetMethod';
import PostMethod from './component/PostMethod';
import DeleteMethod from './component/DeleteMethod';
import PreFilledForm from './component/PreFilledForm';
import PutMethod from './component/PutMethod';
import PreviousState from './component/PreviousState';
import PreviousProps from './component/PreviousProps';
import Advanced from './component/Advanced';
 
export default function App() {
  let user=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]

  return (
    <div className="App">
    
      {/* we have no need to write 'Router' here because we have already wrap the Router inside the index.js file */}
      <Nav />
      <Switch>
        <Route path="/" exact={true} Component={<Home />} />
        <Route path="/about" Component={<About />} />
        <Route path='*'><PageNotFound /></Route>
      </Switch>

      <h1>React Dynamic Routing</h1>
      {
        user.map((item) =>
        <div>
          <Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link>
        </div>
      )}
      <Route path="/user/:id/:name" ><User /></Route>

      {/* POSTMAN API's */}
      <Route path="/get"><GetMethod /></Route>
      <Route path="/post"><PostMethod /></Route>
      <Route path="/delete"><DeleteMethod /></Route>
      <Route path="/getformdata"><PreFilledForm /></Route>
      <Route path="/update"><PutMethod /></Route>
      <Route path="/previousState"><PreviousState /></Route>
      <Route path="/previousProps"><PreviousProps /></Route>
      <Route path="/advance"><Advanced /></Route>
      
    </div>
  );  
}