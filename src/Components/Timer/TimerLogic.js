import React, { Component } from 'react'
import PaymentGenerator from '../Financials/Calculator/PaymentGenerator'


// const pGenerator = new PaymentGenerator()

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

stepValue = v =>{
    if(v > 1){
        return 1
    }else{
        return Math.round(v * 20) / 20
    }
}


scrollTime = stepVal => {
        var givenValue = Math.round(stepVal*100)
        var minutes =  Math.round(300 * givenValue / 100) //300 is max for 5 hours

        // get hours
        if (minutes > 60){
            this.hours = Math.floor(minutes / 60)
        } else if(minutes / 60 === 1){
            this.hours = 1
        }else{
            this.hours = 0
        }
        // First Check if you're at a full hour
        if(minutes === 60 || (minutes / 60) === this.hours){
            this.stagedMinutes = '00'
        }
        // Else run algorithm
        else{
         this.stagedMinutes = (minutes % 60 % 100)
        }
        PaymentGenerator(this.hours, this.stagedMinutes)
        return(
            `0${this.hours}h : ${this.stagedMinutes}m`
        )

}


}

export default TimerLogic