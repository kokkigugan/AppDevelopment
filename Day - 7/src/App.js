import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {/* {isLoggIn && ( */}
        <BrowserRouter>
          <Header />
          <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/regsiter' component={Regsiter} />
            <Route exact path='/account' component={Account} />
          </Router>
          <Footer />
        </BrowserRouter>
  
      {/* {!isLoggIn && <Login />} */}
    </>
  )
}
export default App
