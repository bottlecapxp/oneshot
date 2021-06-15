import React, { useState, useContext } from "react"
import {useHistory} from 'react-router-dom'
import '../CircleBtn_img/CircleBtnimg.css'
import {PaymentContext} from '../../../Context/PaymentContext'
import {TimeContext} from '../../../Context/TimeContext'


const CircleBtnsImg = (props) => {
    const history = useHistory()
    const [timer, setTimer] = useState({
        title: props.title,
        img: props.img,
        extra: props.class
    })
    const {time} = useContext(PaymentContext)
    // const {time} = useContext(TimeContext)

    const payment_action = () => {
        // Check local storage to see if it's Empty or Null
    if(localStorage.getItem('timeStore') === null){
        // if true then store given time to localstorage
        localStorage.setItem('timeStore', `${time}`)
        history.push('/select-paymen/')
    }
    // We're checking to see if time exist if it does then capture and instatiate time as new time then perform task to that time to then push back to localstorage as new time post
    else if(localStorage.getItem('timeStore') != null){
        localStorage.removeItem('timeStore')
        updatingTime(time)
        history.push('/select-payment/')
       
    }

    }

    const updatingTime = (time) => {
            localStorage.setItem('timeStore', time)     
    }

    return (
        <span onClick={payment_action} id='link' className={`btn-confirm box-shadow content-align ${timer.extra}`}>
            <span className='confirm_title'>{timer.title}</span>
        </span>
    )
}
export default CircleBtnsImg;