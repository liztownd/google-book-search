import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={Saved} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
