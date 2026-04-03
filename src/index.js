import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './SignIn';
import Login from './Login';
import { AuthProvider } from './context/AuthContext';
import ProductDetails from './ProductDetails';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </>
);
