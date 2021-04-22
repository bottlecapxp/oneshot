import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import GuestDataCapture from './Pages/GuestDataCapture';
import SetTime from './Pages/SetTime';

function App() {
  return (
<Router>
  <Switch>
    <Route path='/oneshot' component={Main} />
    <Route path='/guest' component={GuestDataCapture} />
    <Route path='/set-time' component={SetTime} />
  </Switch>
</Router>
  )
}

export default App;
