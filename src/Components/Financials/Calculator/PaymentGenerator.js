import React, { useEffect, useState,useContext } from 'react'
import { PaymentContext } from '../../../Context/PaymentContext'






const PaymentGenerator = (hours, minutes) => {
    const {setBilling, setTime} = useContext(PaymentContext)
 

    // What is the rate per hour? (R$4)
    const hourly_rate = 4
    // what is the rate per 15mins (R$1)
    const minute_rate = 1

    // To calculate rate per hour (if hour is > 0 then hour times rate )
    //  To calculate rate per minute (minute / 15 * rate per minute)
    useEffect(()=>{
        setBilling(hours * hourly_rate + (minutes / 15) * minute_rate)
        // Set Selected time here for tracking and to be pushed to local storage by confirm BTN
        setTime(parseInt(`${hours}${minutes}`))
    }, [hours, minutes])

}



export default PaymentGenerator;
 

