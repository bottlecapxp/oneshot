import React, { useEffect, useState } from 'react'
import './PaymentButtons.css'



const PaymentButtons = (props) =>{
    const [info, setInfo] = useState({
        title: props.title, 
        image: props.image
    })

const payment_action =  () =>{
    if(props.title === 'Pay by Card'){
        window.location.replace('/secure-cc-payment')
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