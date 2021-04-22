import React from "react";
import "../Pages/pages.css";
import ChooseAccount from "../Components/Cards/Choose_Account/ChooseAccount";
import CircleTxtBtns from "../Components/Circle_Buttons/CircleBtns_txt/CircleTxtBtns";
import CircleBtnsImg from "../Components/Circle_Buttons/CircleBtn_img/CircleBtnsImg";
import Timer from "../Components/Timer/Timer";

const SetTime = () => {
	return (
		<div className='global_container choose_lot'>
			<div id='content_holder'>
                <div className='timer_holder'>
                <Timer />
                </div>

				<div className='align_timer_btns'>
					<CircleTxtBtns title='+30 Min' time='30' />
					<CircleTxtBtns title='+1 Hr' time='1' />
					<CircleTxtBtns title='All Day' time='8' />
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
