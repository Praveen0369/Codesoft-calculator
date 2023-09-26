import React from 'react';
import Nav from './nav/nav';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Home />
    <About />
    <Contact/>
  </div>
  );
}

export default App;
