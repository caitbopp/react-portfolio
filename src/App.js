import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route>

      </Route>
      // add footer here
    </div>
    </Router>
  );
}

export default App;
