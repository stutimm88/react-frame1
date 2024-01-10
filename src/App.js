import React from 'react';

import NavBar from './components/NavBar'
import TextSec from './components/TextSec';
import Tabs from "./components/Tabs";
import CardSec from './components/CardSec';
import Box from './components/Box';
import Accordion from './components/Accordion';

import './style.css'

const App = () => {
  return (
    <>
    <NavBar/>
    <TextSec/>
    <Tabs/>
    <CardSec/>
    <Box/>
    <Accordion/>
    </>
  );
};

export default App;
