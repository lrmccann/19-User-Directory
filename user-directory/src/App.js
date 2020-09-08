import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./compoonents/Navbar";
import Footer from "./compoonents/Footer"
import Wrapper from "./compoonents/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />  
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;