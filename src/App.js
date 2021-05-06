import logo from './logo.svg';
import './App.css';
import { Profiler, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

  import Home from './pages/Home';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Register from './pages/Register';
  import Login from './pages/Login';
  import Profile from './pages/Profile';
  import Gallery from './pages/Gallery';


function App() {
  return(
  <Router> 
    <div className="App">
    <header>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ="/profile">Profile</Link></li>
          <li><Link to ="/gallery">Gallery</Link></li>
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/profile"><Profile/></Route>
      <Route path="/gallery"><Gallery/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/:id"><About/></Route>
      <Route path="/:id"><Contact/></Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;
// import react from 'react';

// import avatar forn '../assests/Untitled.png';

// import './components/Avatar/avatar.css';

// const Avatar = () => {
//   return (
//     <div>
//     <img
//     scr={avatar}
//     alt="Avatar"
//     className="avatar"
//     />
//     </div>
//   );
// }

// export default Avatar;

// import react from 'react';

// import Avatar form './'
