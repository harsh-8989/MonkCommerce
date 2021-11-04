import logo from "./logo.svg"
import "./App.css"
import UserCard from "./components/UserCard"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import AlbumPage from "./components/AlbumPage"
import UserPage from "./components/UserPage"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Router>
        <div className="">
          <Navbar />
          <Switch>
            <Route
              path="/album/:user/:id"
              render={(props) => <AlbumPage {...props} />}
            />
            <Route path="/" component={UserPage} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default App
