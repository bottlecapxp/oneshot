import logo from './logo.svg';
import {BrowsertRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Main from './Pages/main';

function App() {
  return (

<Router>
  <Switch>
    <Route path='/' exact strict component={Main} />
  </Switch>
</Router>


  )
}

export default App;
