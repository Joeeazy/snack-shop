import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SnackLoader from "./containers/SnackLoader/SnackLoader";
import AddSnackPage from "./pages/AddSnackPage/AddSnackPage";
import EditSnackPage from "./pages/EditPokemonPage/EditSnackPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContextProvider";
import MyCartPage from "./pages/MyCartPage/MyCartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HealthySnacksPage from "./pages/HealthySnacksPage/HealthySnacksPage";
import GiftPackSnackPage from "./pages/GiftPackSnackPage/GiftPackSnackPage";
import AllSnacksPage from "./pages/AllSnacksPage/AllSnacksPage";

// use react-toastify to set an alert! Place  { ToastContainer } in app.js so the alert only shows to the top right of screen on the snacksPage. If place  { ToastContainer }  in snack card component, it will show both inside card and top right of screen.

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />
      <NavBar />
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/snacks" element={<AllSnacksPage />} />
          <Route path="/snacks/healthySnacks" element={<HealthySnacksPage />} />
          <Route
            path="/snacks/giftPackSnacks"
            element={<GiftPackSnackPage />}
          />

          <Route path="/snacks/add" element={<AddSnackPage />} />
          <Route path="/snacks/:id" element={<SnackLoader />} />
          <Route path="/snacks/my-cart" element={<MyCartPage />} />
          <Route path="/snacks/:id/edit" element={<EditSnackPage />} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
