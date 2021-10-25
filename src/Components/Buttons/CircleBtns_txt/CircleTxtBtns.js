import React, { useEffect, useState } from 'react'
import MaxConditon from '../../../Components/max_selection/MaxSelection'
import '../CircleBtns_txt/CircleBtnstxt.css'

const CircleTxtBtns = ({ title, time, addTime, checked, t}) => {
    // const {darkMode} = useContext(PaymentContext)
    const darkMode = 1800
    const [darkModeStyle, setDarkModeStyle] = useState({buttonStyles: 'global_circle_btns', title: 'title'})
    const [timer, setTimer] = useState({title: title, setTime: parseFloat(time)})
	const max_condition = new MaxConditon()
    const incrementTime = () => {
        if(title == 'Max'){ 
            console.log(`Max: ${time}`)
        }
        addTime(timer.setTime)
    }


    useEffect(() => {
        if (darkMode >= 1800 || darkMode <= 600) {
            setDarkModeStyle({
                buttonStyles: 'global_circle_btns_dark',
                title: 'title_dark'
            })
        }
        if (darkMode < 1800 || darkMode > 600) {
            setDarkModeStyle({
                buttonStyles: 'global_circle_btns',
                title: 'title'
            })
        }
    }, [])


    return (
        <div className={`${darkModeStyle.buttonStyles} content-align`} onClick={incrementTime}>
            <span className={darkModeStyle.title}>{timer.title}</span>
        </div>
    )
}

export default CircleTxtBtns;