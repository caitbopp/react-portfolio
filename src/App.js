// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route><AboutMe /></Route>
      <Route><Portfolio /></Route>
      <Route><Contact /></Route>

      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
