import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);
