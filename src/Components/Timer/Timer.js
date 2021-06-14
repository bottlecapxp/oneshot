import React, {useContext, useState, useEffect } from "react";
import { PaymentContext } from '../../Context/PaymentContext'
import "../Timer/Timer.css";


import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
} from "react-circular-input";
import TimerLogic from "./TimerLogic";



const Timer = (props) => {
	const timerLogic = new TimerLogic();
	const {billing} = useContext(PaymentContext)
	// const pGenerator = new PaymentGenerator();

	const [value, setValue] = useState(null);
	// Keeps track of time changes
	useEffect(() => {
		setValue(value + props.addTime);
	}, [props.addTime]);

	return (
		<div className='timer_container'>
		<div className='timer_holder'>
			<div id='timeInfo'>
				<div id='time_holder'>
					<p>Set Time</p>
					<p id='time'>{timerLogic.scrollTime(timerLogic.stepValue(value))}</p>
				</div>
			</div>

			<CircularInput
				value={timerLogic.stepValue(value)}
				onChange={(v) => setValue(timerLogic.stepValue(v))}>
				<CircularTrack stroke='#eee' />
				<CircularProgress className='bar' stroke='#ff4f4f' strokeWidth={12} />
				<CircularThumb r={15} fill='#F0F0F3' stroke='#ff4f4f' />
			</CircularInput>
		</div>
		<div className='cost_holder'><div id='cost_amount'>Total Cost: </div><div className='price'>${`${billing}.00`}</div></div>
		
		</div>
	);
};
export default Timer;
