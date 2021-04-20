import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';

function App() {
  return (
<Router>
  <Switch>
    <Route path='/oneshot' exact strict component={Main} />
  </Switch>
</Router>
  )
}

export default App;
