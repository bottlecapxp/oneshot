import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import GuestDataCapture from './Pages/GuestDataCapture';
import SetTime from './Pages/SetTime';
import { PaymentContext } from './Context/PaymentContext';
import { useState, useMemo, useEffect } from 'react';
import Selectmethod from './Pages/Selectmethod';
import CardPayment from './Pages/CardPayment';
import { CountDown } from './Pages/CountDown';


function App() {
  const [billing, setBilling] = useState()
  const [time, setTime] = useState()
  const providerValue = useMemo(() => ({billing, setBilling, time, setTime}), [billing, time])
  return (
    // basename={process.env.PUBLIC_URL}    //
<Router basename={process.env.PUBLIC_URL}>
  <Switch>
    <PaymentContext.Provider value={providerValue}>
    <Route path='/:location' exact strict component={Main} />
    <Route path='/guest/' exact strict component={GuestDataCapture} />
    <Route path='/set-time/' exact strict component={SetTime} />
    <Route path='/select-payment/' exact strict component={Selectmethod} />
    <Route path='/secure-cc-payment/' exact strict component={CardPayment} />
    <Route path='/remaining-time/' exact strict component={CountDown} />
    </PaymentContext.Provider>

  </Switch>
</Router>
  )
}
export default App;
