import React, { useState, useContext, useEffect} from 'react'
import {PaymentContext} from '../Context/PaymentContext'
import Receipt from '../Components/Receipt/Receipt'



export const CountDown = () => {
    const { darkMode } = useContext(PaymentContext)
    const getSetTime = localStorage.getItem('timeStore')
    const [showReceipt, setShowReceipt] = useState(false)
    const expiredTime = localStorage.getItem('expTime')
    const [darkModeStyle, setDarkModeStyle] = useState({
        globalContainer: 'global_container', 
        color: '#585858',    
        circleAnimation: 'circleAnimation', 
        countDownAdj: 'countdown_adjustment'
    })
    const [containerStyling, setContainerStyling] = useState({
        divStyle:{
            display:'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        buttonStyle:{
            marginTop: '30px',
            border: '1px solid #848484',
            fontSize: '13px',
            // border: '1px solid #FF4F4F',
            padding: '10px',
            borderRadius: '10px', 
            margin: '0px 5px 0px 5px',
            boxShadow: '10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF'
        },
        buttonDiv: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
        }
    })
    const [countDown, setCountDown] = useState({
        hours: Math.round(getSetTime / 100),
        mins: getSetTime % 100,
        secs: 60,
        ms: 1000
    })

    const toggle = () =>{
        setShowReceipt(!showReceipt)
    }
    // Set mutable variables for updates
    var updated_hours = countDown.hours, updated_mins = countDown.mins,  updated_secs = countDown.secs, updated_ms = countDown.ms

    useEffect(()=>{
        if(darkMode >= 1800 || darkMode <= 600){
            setDarkModeStyle({
                globalContainer: 'global_container_dark',
                color: 'white',
                submitBtn: 'submitBtn_dark',
                circleAnimation: 'circleAnimation_dark',
                countDownAdj: 'countdown_adjustment_dark'
            })
            setContainerStyling({
                divStyle:{
                    display:'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                },
                buttonStyle:{
                    marginTop: '30px',
                    border: '1px solid #EA4335',
                    fontSize: '13px',
                    // border: '1px solid #FF4F4F',
                    padding: '10px',
                    borderRadius: '10px', 
                    margin: '0px 5px 0px 5px',
                    color: '#EA4335',
                    background: '#1E2834',
                    boxSizing: 'border-box',
                    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.6), -10px -10px 30px rgba(255, 255, 255, 0.12)'
                   
                },
                buttonDiv: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }
            })
        }

        setInterval(()=>{
            setCountDown({
                hours: updated_hours,
                mins: updated_mins, 
                secs: updated_secs,
                ms: updated_ms
            })      
        }, 1000)


    },[])



    const run = () => { 
        updated_secs--
        if(updated_ms === 0){
            updated_secs--
            updated_ms = 100
        }
        if(updated_secs === 0){
            updated_mins--
            updated_secs = 60
        }
        if(updated_mins === 0){
            updated_hours--
            updated_mins = 60
        }
        
        if(updated_hours === 0){
            updated_hours = '00'
        }
        // console.log(updated_secs)
        setTimeout(run, 1000)
    }
run()
    // setInterval(run, 1000)

    
    return (
        <div className={`${darkModeStyle.globalContainer} choose_lot`}>
<div style={containerStyling.divStyle}>
<div className={darkModeStyle.circleAnimation}></div>
            <div className='countdown_digits_holder'>
                <div className={darkModeStyle.countDownAdj}>
                    <h3 style={{marginBottom: '0px'}}>Active Session</h3>
                <div className='countdown_digits'>
                    <span className='digits'>{`${countDown.hours}h`}</span>
                    <span className='digits'>{`${countDown.mins}m`}</span>
                    <span className='digits' >{`${countDown.secs}`}s</span>
                </div>
                </div>
        
        </div>
        {showReceipt?<Receipt />:'' }
   
        <h4 style={{marginTop: '30%', color: darkModeStyle.color}}>Your Time Expires at: {expiredTime}</h4>
        <div style={containerStyling.buttonDiv}>
        <span style={containerStyling.buttonStyle}>Extend My Time</span>
        <span onClick={toggle} style={containerStyling.buttonStyle}>View My Receipt</span>
        </div>

</div>

            {/* Count down time */}
            {/* Buttone to Extend time here */}
        </div>
    )
}