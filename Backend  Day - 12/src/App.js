import React from "react"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register} from "./pages/login/Regsiter"
import { useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import TrackingProgress from "./components/header/tracking"
import AboutUs from "./pages/aboutus"
import { Order } from "./components/hero/Order"
import OrderPage from "./components/hero/Orderpage"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  console.log(isLoggIn);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu behavior
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/track-order" element={<TrackingProgress/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/order" element={<OrderPage/>} />
          <Route path="/track-order" component={<TrackingProgress/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
