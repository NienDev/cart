import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SideCart } from "./components/SideCart";
import { OrderProvider } from "./context/OrderContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

export const App: React.FC = () => {
  return (
    <div className="">
      <OrderProvider>
        <Router>
          <SideCart />
          <Navbar />
          <Routes>
            <Route path="/cart/" element={<Home />}></Route>
            <Route path="/cart/about" element={<About />}></Route>
            <Route path="/cart/store" element={<Store />}></Route>
            <Route path="*" element={<h1>Page not found</h1>}></Route>
          </Routes>
        </Router>
      </OrderProvider>
    </div>
  );
};
