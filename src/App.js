import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import GuestDataCapture from './Pages/GuestDataCapture';
import SetTime from './Pages/SetTime';
import Payment from './Pages/Payment';

function App() {
  return (
    // basename={process.env.PUBLIC_URL}    //
<Router basename={process.env.PUBLIC_URL}>
  <Switch>
    <Route path='/' exact strict component={Main} />
    <Route path='/guest' exact strict component={GuestDataCapture} />
    <Route path='/set-time' exact strict component={SetTime} />
    <Route path='/payment' exact strict component={Payment} />
  </Switch>
</Router>
  )
}

export default App;
