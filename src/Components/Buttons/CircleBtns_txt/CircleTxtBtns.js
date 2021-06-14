import React, {useState} from 'react'
import '../CircleBtns_txt/CircleBtnstxt.css'

const CircleTxtBtns = ({title, time, addTime}) => {
    const [timer, setTimer] = useState({
        title: title,
        setTime: parseFloat(time)
    })

    const incrementTime = () =>{
     addTime(timer.setTime)
    }
    return (
        <div className='global_circle_btns box-shadow content-align' onClick={incrementTime}>
            <span className='title'>{timer.title}</span>
        </div>
    )
}

export default CircleTxtBtns;