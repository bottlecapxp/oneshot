import React, {useState} from "react";
import '../Timer/Timer.css'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
} from 'react-circular-input'

const Timer = () => {
    const [value, setValue] = useState(0.25)
    const stepValue = v => Math.round(v * 32) / 32

	return (
    <div className='timer_holder'>
        <div id='timeInfo'>
            <div id='time_holder'>
                <p>Time Remaining</p>
                <p id='time'>{Math.round(stepValue(value) * 100)}%</p>
            </div>
        </div>

		<CircularInput
		value={stepValue(value)}
		onChange={v => setValue(stepValue(v))}>
		<CircularTrack stroke="#eee"/>
		<CircularProgress  stroke='#ff4f4f' strokeWidth={12}/>
		<CircularThumb r={15} fill='#F0F0F3' stroke='#ff4f4f'/>
	</CircularInput>

    </div>
	);
};
export default Timer;
