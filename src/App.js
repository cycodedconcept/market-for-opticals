import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Head from './components/opticals/Head';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/market' element={<Head />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
