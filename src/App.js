import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';

function App() {
  return (
<Router>
  <Switch>
    <Route path='/oneshot' component={Main} />
  </Switch>
</Router>
  )
}

export default App;
