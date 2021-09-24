import React, { useContext, useState, useEffect } from "react";
import { PaymentContext } from '../../Context/PaymentContext'
import "../Timer/Timer.css";
import Moon from '../../Assets/moon.png'
import Day from '../../Assets/sun.svg'

import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
} from "react-circular-input";
import TimerLogic from "./TimerLogic";



const Timer = (props) => {
	// const today = new Date();
	const timerLogic = new TimerLogic();
	const { totalbilling, dayTime, dayTimeBilling, nightTime, nightTimeBilling, setExpiredTime, setStartTime, darkMode } = useContext(PaymentContext)
	// const pGenerator = new PaymentGenerator();
	const [value, setValue] = useState(null);
	const [validateDayTime, setDayTimeValidation] = useState()
	const [validateNightTime, setNightTimeValidation] = useState()
	const [darkModeStyle, setDarkModeStyle] = useState({
		circleContainer: 'timeInfo', 
		costAmount: 'cost_amount',
		circularTrack: '#eee'
		 
	 })

	var hours = Math.floor(timerLogic.scrollTime(timerLogic.stepValue(value))/100)
	var minutes = timerLogic.scrollTime(timerLogic.stepValue(value))%100
	var timeUnit = 'am'
	var cTimeUnit = 'am'
	if(minutes == 0){
		minutes = parseInt(`${'00'}`)
	}

	const currentTime = new Date();

	var expiredMinutes = parseInt(currentTime.getMinutes() + minutes)
	var expiredHours = currentTime.getHours() + hours
	if(expiredMinutes > 60){
		expiredMinutes = expiredMinutes - 60
		expiredHours = expiredHours + 1
	}
	if(expiredMinutes < 10){
		expiredMinutes = parseInt(`${0}${expiredMinutes}`)
	}
	if(expiredHours == 24){
		hours = 12
		timeUnit = 'am'
	}
	if(expiredHours > 24){
		hours = hours - 24
		timeUnit = 'am'
	}
	if(expiredHours >= 12){
		timeUnit = 'pm'
	}

	if(currentTime.getHours() >= 12){
		cTimeUnit = 'pm'
	}else{
		cTimeUnit = 'am'
	}
	var expTime = `${expiredHours}:${expiredMinutes}${timeUnit}`
	var expTimeInSecs = (expiredHours * 3600) + (expiredMinutes * 60)
	var startTime = `${currentTime.getHours()}:${currentTime.getMinutes()}${cTimeUnit}`
	setExpiredTime(expTime)
	localStorage.setItem('expTimeInSecs', expTimeInSecs)
	localStorage.setItem('expTime', expTime)
	localStorage.setItem('total', totalbilling)
	// Keeps track of time changes
	useEffect(() => {

			if(darkMode >= 1800 || darkMode <= 600){
				setDarkModeStyle({
					circleContainer: 'timeInfo_dark', 
					costAmount: 'cost_amount_dark', 
					circularTrack: '#1B242F'
				})
			}



		setValue(value + props.addTime);
		if (dayTime == 0) {
			setDayTimeValidation(true)
		} else { setDayTimeValidation(false) }
		if (nightTime == 0) {
			setNightTimeValidation(true)
		}
		localStorage.setItem('startTime', startTime)
		
		
		setStartTime(startTime)

	}, [props.addTime]);

	return (
		<div className='timer_container'>
			<div className='timer_holder'>
				<div id={darkModeStyle.circleContainer}>
					<div id='time_holder'>
					<p className='set_time' style={{marginTop: '10px'}}>Set Duration</p>
						<p id='time'>{`${hours}h:${minutes}m`}</p>

					<p className='set_time' style={{marginTop: '10px'}}>Expires at</p>
					<p className='rate_' style={{textAlign: 'center'}}>{expTime}</p>
	
						{/* <p className='set_time'>Daily Rates</p> */}
						{/* Rates Settings */}
						{/* <div className='rate_container'>
							<div className='daily_container day'>
								<img id='sun' src={Day} alt='sun'></img>
								<p className='rate_'>$4hr</p>
							</div>
							<div className='daily_container night'>
								<img id='moon' src={Moon} alt='moon'></img>
								<p className='rate_'>$6hr</p>
							</div>
						</div> */}
						
					</div>
				</div>

				<CircularInput
					value={timerLogic.stepValue(value)}
					onChange={(v) => setValue(timerLogic.stepValue(v))}>
					<CircularTrack strokeWidth={8} stroke={darkModeStyle.circularTrack} />
					<CircularProgress className='bar' stroke='#ff4f4f' strokeWidth={12} />
					<CircularThumb r={15} fill='#F0F0F3' stroke='#ff4f4f' />
				</CircularInput>
			</div>


			<div className='cost_holder'><div id={darkModeStyle.costAmount}>Total Cost: </div><div className='price'>${`${totalbilling}`}</div></div>

		</div>
	);
};
export default Timer;

// <div className='overlap_Cost'>
// {/* Day rate */}
// <div className='day_rate'>
// 	<div className='info_holder dayRate_icon'>
// 	<img id='sun' src={Day} alt='sun'></img>
// 	</div>

// 	<div id='hours_' className='info_holder dayRate_time'>{Math.floor(dayTime/100)}hrs : {Math.floor(dayTime%100)}mins</div>
// 	<div id='cost_' className='info_holder dayRate_cost'>${dayTimeBilling}</div>

// </div>
// {/* Night Rate */}
// <div className='night_rate'>
// 	<div className='info_holder nightRate_icon'>
// 	<img id='moon' src={Moon} alt='moon'></img>
// 	</div>
// 	<div id='hours_' className='info_holder dayRate_time'>{Math.floor(nightTime/100)}hrs : {Math.floor(nightTime%100)}mins</div>
// 	<div id='cost_' className='info_holder dayRate_cost'>${nightTimeBilling}</div>

// </div>

// </div>