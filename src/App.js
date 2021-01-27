import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router';
import Spisak from './components/Spisak';
import Kalkulator from './components/Kalkulator';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Kalkulator />
        </Route>
        <Route path='/spisak'>
          <Spisak />
        </Route>

      </Switch>
    </>
  );
}

export default App;
