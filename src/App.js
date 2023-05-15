import logo from './logo.svg';
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Categories } from './components/Categories';
import { Mainpage } from './components/Mainpage';

function App() {
  return (<>
    <div classNameName="App">
      <div className='container'>
        <Mainpage />
      </div>
    </div>



  </>
  );
}

export default App;
