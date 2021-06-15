import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './PaymentButtons.css'



const PaymentButtons = (props) =>{
    const history = useHistory()
    const [info, setInfo] = useState({
        title: props.title, 
        image: props.image
    })

const payment_action =  () =>{
    if(props.title === 'Pay by Card'){
        history.push('/secure-cc-payment/')
    }
}

    return(
        <div className='paymentButton' onClick={payment_action}>
            <div>
            <img className='paymentSelectionIcons' src={info.image} alt={info.title}></img>
            <span>{info.title}</span>
            </div>
        </div>
    )
}
export default PaymentButtons;