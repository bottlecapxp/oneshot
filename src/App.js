import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import GuestDataCapture from './Pages/GuestDataCapture';
import SetTime from './Pages/SetTime';
import Payment from './Pages/Payment';
import { PaymentContext } from './Context/PaymentContext';
import { useState, useMemo, useEffect } from 'react';


function App() {
  const [billing, setBilling] = useState()
  const providerValue = useMemo(() => ({billing, setBilling}), [billing, setBilling])
  return (
    // basename={process.env.PUBLIC_URL}    //
<Router basename={process.env.PUBLIC_URL}>
  <Switch>
    <PaymentContext.Provider value={providerValue}>
    <Route path='/' exact strict component={Main} />
    <Route path='/guest' exact strict component={GuestDataCapture} />
    <Route path='/set-time' exact strict component={SetTime} />
    <Route path='/payment' exact strict component={Payment} />
    </PaymentContext.Provider>

  </Switch>
</Router>
  )
}

export default App;
