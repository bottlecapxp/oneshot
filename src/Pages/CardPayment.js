import React from 'react'
import CreditCardIcon from '../Assets/ccIcon.svg'
import Lock from '../Assets/lock.png'
import {useHistory} from 'react-router-dom'


const CardPayment = () => {
const history = useHistory()
const pay_now = () =>{
    history.push('/remaining-time')


}

return(
    <div className='global_container choose_lot'>
        <div>
        <h1 className='global_content_title slim' style={{textAlign: 'center',marginTop: '-50%'}}>Enter your card's information below</h1>
        <div className='card_'>
            {/* Enter your card numner */}
            <div className='stacked_'>
            <label id='CCnumberLabel'>Enter Your Card Number</label>
            <input id='CCnumber'></input>
            </div>
            {/* Expiration CVC & Icon */}
            <div className='auth_holder'>
                <div className='stacked_'>
                <label>Expiration</label>
                <input id='expiration'></input>
                </div>
                <div className='stacked_'>
                <label>CVC</label>
                <input id='cvc'></input>
                </div>
                <div>
                    <img className='ccIcon' src={CreditCardIcon} alt='creditCard_logo'></img>
                </div>
            </div>
            <div className='securePaymentHolder'>
                <div className='securePayment_'>  {/* display flex */}
                    {/* image */}
                    <img className='lock' src={Lock}></img>
                    <p>Secure Payment</p>
                    {/* text info */}
                </div>
            </div>

            {/* Button here */}
            <div className='ccCardSubmissionHolder'>
            <input style={{color: '#FF5759'}} className='submitBtn box-shadow ccCardSubmission' onClick={pay_now} type='submit' value='Pay Now'></input>
            </div>
            
            
        </div>
        </div>
    </div>
)
}
export default CardPayment;