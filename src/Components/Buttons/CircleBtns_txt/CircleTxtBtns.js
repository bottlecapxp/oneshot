import React, {useEffect, useState} from 'react'
import '../CircleBtns_txt/CircleBtnstxt.css'

const CircleTxtBtns = ({title, time, addTime}) => {
        // const {darkMode} = useContext(PaymentContext)
        const darkMode = 1800
        const [darkModeStyle, setDarkModeStyle] = useState({
            buttonStyles: 'global_circle_btns',
            title: 'title'
        })
    
    
    useEffect(()=>{
        if(darkMode >= 1800 || darkMode <= 600){
            setDarkModeStyle({
                buttonStyles: 'global_circle_btns_dark', 
                title: 'title_dark'
            })
        }
    }, [])
    const [timer, setTimer] = useState({
        title: title,
        setTime: parseFloat(time)
    })

    const incrementTime = () =>{
     addTime(timer.setTime)
    }
    return (
        <div className={`${darkModeStyle.buttonStyles} content-align`} onClick={incrementTime}>
            <span className={darkModeStyle.title}>{timer.title}</span>
        </div>
    )
}

export default CircleTxtBtns;