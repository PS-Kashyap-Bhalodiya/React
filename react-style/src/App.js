import './App.css';
import React from 'react';

import Style from './component/Style';
import {Button} from 'react-bootstrap';
import Map from './component/Map';
import Reuse from './component/Reuse';
import Fragment from './component/Fragment';
import ChildToParent from './component/ChildToParent';
import PureComponent from './component/PureComponent';
import UseMemo from './component/UseMemo';
import RefKeyword from './component/RefKeyword';
import UseRef from './component/UseRef';
import ForwardRef from './component/ForwardRef';
import ControlledComponent from './component/ControlledComponent';
import UnControlledComponent from './component/UnControlledComponent';
import HigherOrderComponent from './component/HigherOrderComponent';

function App() {
  return (
    <div className="App">
        <Style />

        <Button onClick={() => alert("Install Bootstrap")}>Click Me</Button>
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>

        <Map />
        <Reuse />
        <Fragment />
        <ChildToParent />
        <PureComponent />
        <UseMemo />
        <RefKeyword />
        <UseRef />       
        <ForwardRef />
        <ControlledComponent />
        <UnControlledComponent />
        <HigherOrderComponent />
        
    </div>
  );
}

export default App;
