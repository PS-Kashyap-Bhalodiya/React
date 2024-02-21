import './App.css';

import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';
import Home from './component/Home';
import Links from './component/Links';
import About from './component/About';
import Redirect_404page from './component/Redirect_404page';
import Params from './component/Params';
import Style from './component/Style';
import SearchParams from './component/SeachParams';
import Navigation from './component/Navigation';
import NestedRouting from './component/NestedRouting';
import Company from './component/Company';
import Channel from './component/Channel';
import Location from './component/Location';
import ProtectedRoute from './component/ProtectedRoute';
import Login from './component/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Links />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    
                    {/* This is one way to create otherwise you will use 'Navigate' */}
                    { /*<Route path='/*' element={<Redirect_404page />} /> */} 
                    <Route path='/*' element={<Navigate to='/' />} />

                    <Route path='/Params/:name' element={<Params />} />

                    <Route path='/style' element={<Style />} />
                    {/* http://localhost:3000/searchparams?age=22&city=rajkot */}
                    <Route path='/searchparams' element={<SearchParams />} />

                    <Route path='/navigation' element={<Navigation />} />

                    <Route path='/contact/' element={<NestedRouting />} >
                        <Route path='company' element={<Company />} />
                        <Route path='channel' element={<Channel />} />
                    </Route>

                    <Route path='/location' element={<Location />} />

                    <Route path='/' element={<ProtectedRoute Component={Home} />} />
                    <Route path='/login' element={<Login />} />


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
