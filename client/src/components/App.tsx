import React from 'react';
import './App.css';
import Header from './header/Header';
import {Routes, Route} from "react-router-dom"
import { Container } from 'react-bootstrap';
import Home from '../pages/Home'
import User from '../pages/User'
import Contact from '../pages/Contact'
import Goods from '../pages/Goods'

function App() {
  return (
    <Container fluid className='p-0'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Goods />} />
      </Routes>
    </Container>
  );
}

export default App;
