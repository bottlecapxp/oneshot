import React, { useState, useContext, useEffect } from 'react'
import { PaymentContext } from '../Context/PaymentContext'
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
        divStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonStyle: {
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
    const toggle = () => {
        setShowReceipt(!showReceipt)
    }

    var getExpTimeInSecs = localStorage.getItem('expTimeInSecs')
    var date = new Date()
    var m = date.getMinutes() * 60
    var h = date.getHours() * 3600
    var s = date.getSeconds()
    var sum = 0
    

    var hour_ = Math.floor(getSetTime / 100) * 3600
    var minutes_ = Math.round(getSetTime % 100) * 60
    var count = expiredTime - sum


    // Add this to local storage as the initial time
    const [countDown, setCountDown] = useState({
        hours: Math.floor(getSetTime / 100),
        mins: Math.round(getSetTime % 100),
        secs: 60
    })




    var counter = null;



    const initCounter = () => {
        if (localStorage.getItem('count') == null || localStorage.getItem('count') == 0) {
            localStorage.setItem('count', count);
        }

        count = getLocalStorage('count');

        counter = setInterval(timer, 1000);
    }

    const setLocalStorage = (key, value) => {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
        return value;
    }

    const getLocalStorage = (key) => {
        return localStorage ? localStorage.getItem(key) : '';
    }



    const timer = () => {
        var date_y = new Date()
        if(date_y.getMinutes() > m || date_y.getHours() > h || date_y.getSeconds() > s){
            m = date_y.getMinutes()
            h = date_y.getHours()
            s = date_y.getSeconds()
            sum = (h * 3600) + (m * 60)
            // console.log(`sum: ${sum} - ${h}:${m}:${s}`)
        }
      
     
        count = setLocalStorage('count', getExpTimeInSecs - sum);
        if (count <= 0) {
            setCountDown({
                hours: '00',
                mins: '00',
                secs: '00'
            })
            clearInterval(counter);
            return;
        }
        var seconds = count % 60
        var minutes = Math.floor(count / 60)
        var hours = Math.floor(minutes / 60)
        minutes %= 60;
        hours %= 60;

        setCountDown({
            hours: hours,
            mins: minutes,
            secs: 60 - s
        })
        ;
        ;

    }










    // Set mutable variables for updates
    // These are the times updated times     


    useEffect(() => {
        if (darkMode >= 1800 || darkMode <= 600) {
            setDarkModeStyle({
                globalContainer: 'global_container_dark',
                color: 'white',
                submitBtn: 'submitBtn_dark',
                circleAnimation: 'circleAnimation_dark',
                countDownAdj: 'countdown_adjustment_dark'
            })
            setContainerStyling({
                divStyle: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                buttonStyle: {
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



        initCounter()
    }, [])

    return (
        <div className={`${darkModeStyle.globalContainer} choose_lot`}>
            <div style={containerStyling.divStyle}>
                <div className={darkModeStyle.circleAnimation}></div>
                <div className='countdown_digits_holder'>
                    <div className={darkModeStyle.countDownAdj}>
                        <h3 style={{ marginBottom: '0px' }}>Active Session</h3>
                        <div className='countdown_digits'>
                            <span className='digits'>{`${countDown.hours}h`}</span>
                            <span className='digits'>{`${countDown.mins}m`}</span>
                            <span className='digits' >{countDown.secs == 60?'00':`${countDown.secs}`}s</span>
                        </div>
                    </div>

                </div>
                {showReceipt ? <Receipt /> : ''}

                <h4 style={{ marginTop: '30%', color: darkModeStyle.color }}>Your Time Expires at: {expiredTime}</h4>
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




// console.log(time.getSeconds())
// localStorage.setItem('secs', updated_secs--)

// if(updated_secs <= 0 ){
//     localStorage.setItem('secs', 60)

//  clearInterval(run)
//         // localStorage.setItem('mins', updated_mins)
//         // localStorage.setItem('secs', 60)
//     }
// if(updated_mins == 0){
//     updated_hours--
//     localStorage.setItem('hours', updated_hours)
//     localStorage.setItem('mins', 60)
//     // updated_mins = 60
// }
// if(updated_hours == 0){
//     localStorage.setItem('hours', '00')
//     // updated_hours = '00'
// }