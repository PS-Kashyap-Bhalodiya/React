import React, { useState } from 'react';
import './App.css';

import User from './User';
import FunctionalComponent from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';
import JSX from './component/JSX';
import Props from './component/Props';
import Events from './component/Events';
import StateWithFunctionalComponent from './component/StateWithFunctionalComponent';
import StateWithClassComponent from './component/StateWithClassComponent';
import PropsWithFunctionalComponent from './component/PropsWithFunctionalComponent';
import PropsWithClassComponent from './component/PropsWithClassComponent';
import ConditionalRendering from './component/ConditionalRendering';
import PassFunctionProps from './component/PassFunctionProps';
import Hooks from './component/Hooks';
import UseEffect from './component/useEffect';


import Constructor from './lifecycleMethods/Constructor';
import Render from './lifecycleMethods/Render';
import ComponentDidMount from './lifecycleMethods/ComponentDidMount';
import ComponentDidUpdate from './lifecycleMethods/ComponentDidUpdate';
import ShouldComponentUpdate from './lifecycleMethods/ShouldComponentUpdate';
import ComponentWillunmount from './lifecycleMethods/ComponentWillUnmount';

function App() {
  function getData() {
    alert("Hello from App");
  }

  const [name, setName] = useState("anil");
  const [data, setData] = useState(1);
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <h1>Hello World</h1>
      
      {/* we can use functional component in two ways: 1) <User />, 2) <User></User> */}
      <User />
      <FunctionalComponent />
      <ClassComponent />
      <JSX />
      <Props />
      <Events />
      <StateWithFunctionalComponent />
      <StateWithClassComponent />
      <PropsWithFunctionalComponent name={"yash"} age="21" />
      <PropsWithClassComponent name={"Mukund"} />
      <ConditionalRendering />
      <PassFunctionProps data={getData} />
      <Hooks />
      {/* useEffect for state */}
      {/* <UseEffect /> */}
      {/* useEffect for props */}
      <UseEffect count={count} data={data} />

{/*       
      <Constructor />
      <Render />
      <ComponentDidMount />
      <ComponentDidUpdate />
      <ShouldComponentUpdate /> 
      <ComponentWillUnmount />
*/}

    </div>
  );
}

export default App;
