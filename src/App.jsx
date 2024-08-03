
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SnacksPage from './pages/SnacksPage/SnacksPage';
import SnackLoader from './containers/SnackLoader/SnackLoader';
import AddSnackPage from './pages/AddSnackPage/AddSnackPage';
import EditSnackPage from './pages/EditPokemonPage/EditSnackPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import CartContextProvider from './context/CartContextProvider';
import MyCartPage from './pages/MyCartPage/MyCartPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CartContextProvider>
        <Routes>
          
        <Route path="/" element={<LandingPage />} />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/snacks/add" element={<AddSnackPage />} />
        <Route path="/snacks/:id" element={<SnackLoader />} />
        <Route path="/snacks/my-cart" element={<MyCartPage/>} />
        <Route path="/snacks/:id/edit" element={<EditSnackPage />} />
       
        </Routes>
        </CartContextProvider>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
