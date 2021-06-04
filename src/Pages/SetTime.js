import React, {useState, useEffect} from "react";
import "../Pages/pages.css";
import ChooseAccount from "../Components/Cards/Choose_Account/ChooseAccount";
import CircleTxtBtns from "../Components/Circle_Buttons/CircleBtns_txt/CircleTxtBtns";
import CircleBtnsImg from "../Components/Circle_Buttons/CircleBtn_img/CircleBtnsImg";
import Timer from "../Components/Timer/Timer";

const SetTime = () => {

const [btnClickUpdate, setBtnClickUpdate] = useState(0.0)
const [val, setVal] = useState(0.0)


const timeUpdate = (val) => {
	var nValue = parseFloat(val)
	setVal(nValue)
	// check for match
	if(val === btnClickUpdate){
		reset()
	}
	else(
		setBtnClickUpdate(nValue)
	)
}

useEffect(() => {
	if(btnClickUpdate === 0){
		setBtnClickUpdate(val)
	}
}, [btnClickUpdate])


const reset = () =>{
	setBtnClickUpdate(0.0)
}



// console.log(btnClickUpdate)
	return (
		<div className='global_container choose_lot'>
			<div id='content_holder'>
                <div className='timer_holder'>
                <Timer addTime={btnClickUpdate}/>
                </div>

				<div className='align_timer_btns'>
					<CircleTxtBtns addTime={timeUpdate} title='+30 Min' time='0.10' />
					<CircleTxtBtns addTime={timeUpdate} title='+1 Hr' time='0.20' />
					<CircleTxtBtns addTime={timeUpdate} title='All Day' time='1' />
				</div>

				<div className='align_timer_btns btns_img_container'>
					<CircleBtnsImg title='' img='' />
					<CircleBtnsImg title='' img='' class='plateCapture'/>
					<CircleBtnsImg title='' img='' />
				</div>
			</div>
		</div>
	);
};

export default SetTime;

	// var newValue = parseFloat(val)
	
	// while (val === btnClickUpdate){
	// 	setBtnClickUpdate(0.0)
	// 	if(btnClickUpdate === 0.0){
	// 		setBtnClickUpdate(newValue)
	// 	}
	// }
	// 	setBtnClickUpdate(newValue)