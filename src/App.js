import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            {/* <Route path='/services' element={<Services/>} />
            <Route path='/products' exact element={<Products/>} />
            <Route path='/sign-up' exact element={<SignUp/>} /> */}
          </Routes>
        </Router>    
      </>
    )
  }
}
