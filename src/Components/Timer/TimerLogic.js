import React, { Component } from 'react'

class TimerLogic extends Component {
    constructor(props){
        super(props)
        this.state = {
            hours: 0,
            stagedMinutes: 0,
            value: 0.0
        }
    }

setValue = valFunc =>{
this.value = valFunc
}

stepValue = v => Math.round(v * 20) / 20

scrollTime = stepVal => {
        var givenValue = Math.round(stepVal*100)
        var minutes =  Math.round(300 * givenValue / 100) //300 is max for 5 hours


        // get hours
        if (minutes > 60){
            this.hours = Math.floor(minutes / 60)
        }else{
            this.hours = 0
        }
        // First Check if you're at a full hour
        if(minutes === 60 || (minutes / 60) === this.hours){
            this.stagedMinutes = '00'
            if(this.hours === 0 && this.stagedMinutes === '00'){
                this.hours = 1
            }
        }

        // Else run algorithm
        else{
         this.stagedMinutes = (minutes % 60 % 100)
        }


        return(
            `0${this.hours} : ${this.stagedMinutes}`
        )

}


// btnClick_AddTime = (timeIncrement) =>{
// switch (timeIncrement) {
//     case timeIncrement === 30:
//         this.stagedMinutes = this.stagedMinutes + timeIncrement
//         this.value = 0.06
//         break;
//     case timeIncrement === 1:
//         this.hours = this.hours + timeIncrement
//         this.value = 0.13
//         break;
//     default:
//         break;
// }
// }


}

export default TimerLogic