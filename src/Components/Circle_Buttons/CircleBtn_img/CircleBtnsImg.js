import React, { useState } from "react"
import '../CircleBtn_img/CircleBtnimg.css'


const CircleBtnsImg = (props) => {
    const [timer, setTimer] = useState({
        title: props.title,
        img: props.img,
        extra: props.class
    })
    return (
        <div className={`global_circle_btns box-shadow content-align ${timer.extra}`}>
            <img src='#' alt=''></img>
        </div>
    )
}
export default CircleBtnsImg;