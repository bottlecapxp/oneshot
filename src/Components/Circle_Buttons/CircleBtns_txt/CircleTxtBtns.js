import React, {useState} from 'react'
import '../CircleBtns_txt/CircleBtnstxt.css'

const CircleTxtBtns = (props) => {
    const [timer, setTimer] = useState({
        title: props.title,
        setTime: parseInt(props.time)
    })
    const incrementTime = () =>{
        var times = timer.setTime
        console.log(times++)
    }
    return (
        <div className='global_circle_btns box-shadow content-align' onClick={incrementTime}>
            <span className='title'>{timer.title}</span>
        </div>
    )
}

export default CircleTxtBtns;