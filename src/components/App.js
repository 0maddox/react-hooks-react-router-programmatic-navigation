import React, { useState } from "react";
import { Route,  Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch> */}
          <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route exact path="/" element ={<Home isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
