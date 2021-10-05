import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contests from './components/Contests/Contests';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">


      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/Contests">
            <Contests></Contests>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
