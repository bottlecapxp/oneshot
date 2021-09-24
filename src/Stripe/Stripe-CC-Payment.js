import React, { useState, useContext, useEffect } from 'react'
import {PaymentContext} from '../Context/PaymentContext'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Lock from '../Assets/lock.png'
import CreditCardIcon from '../Assets/ccIcon.svg'
import axios from 'axios'
import '../Pages/pages.css'
import Loading from '../Components/Loading/Loading'
import { withRouter, useHistory } from 'react-router-dom'


const StripePayment = () => {
    // using state to keep track of stripe payment, show errors, and manange user interface
    const [success, setSuccess] = useState(false)
    const [status, setStatus] = useState({
        status: "Enter your card's information below"
    })
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecrete] = useState('')
    const {userInfo, totalbilling, darkMode} = useContext(PaymentContext)
    const [darkModeStyle, setDarkModeStyle] = useState({
        globalContainer: 'global_container', 
        color: '#585858', 
        submitBtn: 'submitBtn',
        card: 'card_'   
    })


    const stripe = useStripe()
    const element = useElements()
    const history = useHistory()

    const CARD_ELEMENT_OPTIONS = {
        style: { 
            base: { 
                color: 'white'
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        })

        if (!error) {
            try {
                setTimeout(()=>{
                        history.push('/remaining-time/')
                        }, 2000)
                setSuccess(true)
                // const { id } = paymentMethod
                // const response = await axios.post("https://bottlecapxp.github.io/oneshot/payment", {
                //     name: userInfo.name, 
                //     phone: userInfo.phone, 
                //     license: userInfo.license,
                //     amount: totalbilling * 100,
                //     id
                // })
                // if (response.data.success) {
                //     // setTimeOut to Change to next page
                //     setTimeout(()=>{
                //         history.push('/remaining-time/')
                //     }, 2000)
                //         console.log("SuccessFul Payment")
                //         setSuccess(true)
                 
                  
                // }

            } catch (error) {
                // Change the title information
                setStatus({
                    status: error
                })
            }
        }

    } // end of handle submit

    useEffect(()=>{
        if(darkMode >= 1800 || darkMode <= 600){
            setDarkModeStyle({
                globalContainer: 'global_container_dark',
                color: 'white',
                submitBtn: 'submitBtn_dark',
                card: 'card_dark' 
            })
        }
    }, [])
    return (
        <>
            <div className={`${darkModeStyle.globalContainer} choose_lot`}>
                {stripe? 

                <div>
                    <h1 className='global_content_title slim' style={{ textAlign: 'center', marginTop: '-50%', color: darkModeStyle.color }}>{status.status}</h1>
                    <form onSubmit={handleSubmit} className={darkModeStyle.card}> {/* this should be a form */}
                        {/* Enter your card numner */}
                        <div className='stacked_'>
                            <label style={{color: darkModeStyle.color}} id='CCnumberLabel'>Enter Your Card Number</label>
                            <div id='CCnumber'>
                                <CardNumberElement options={CARD_ELEMENT_OPTIONS}/>
                            </div>
                        </div>
                        {/* Expiration CVC & Icon */}
                        <div className='auth_holder'>
                            <div className='stacked_'>
                                <label style={{color: darkModeStyle.color}}>Expiration</label>
                                <div id='expiration'>
                                    <CardExpiryElement options={CARD_ELEMENT_OPTIONS}/>
                                </div>

                            </div>
                            <div className='stacked_'>
                                <label style={{color: darkModeStyle.color}}>CVC</label>
                                <div id='cvc'>
                                    <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                                </div>
                            </div>
                            <div>
                                <img className='ccIcon' src={CreditCardIcon} alt='creditCard_logo'></img>
                            </div>
                        </div>
                        <div className='securePaymentHolder'>
                            <div className='securePayment_'>  {/* display flex */}
                                {/* image */}
                                <img className='lock' src={Lock}></img>
                                <p style={{color: darkModeStyle.color}}>Secure Payment</p>
                                {/* text info */}
                            </div>
                        </div>

                        {/* Button here */}
                        <div className='ccCardSubmissionHolder'>
                            <input style={success? { color: 'green', border: '1px solid green !important' }:{ color: '#FF5759',  border: '1px solid #FF5759 !important' }} className={`${darkModeStyle.submitBtn} ccCardSubmission`} type='submit' value={success? 'Approved!': 'Pay Now'}></input>
                        </div>


                    </form>
                </div>
                :
                <Loading />
}
            </div>
        </>
    )
}
export default StripePayment;

