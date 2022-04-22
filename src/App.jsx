import Topbar from "./component/Topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/works/Works";
import Profile from "./component/testimonials/Profile";
import Contact from "./component/contact/Contact";
import "./app.scss";
import { useState } from 'react';
import Menu from "./component/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen= {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen= {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Profile/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
