import { Component } from 'react'
import PaymentGenerator from '../Financials/Calculator/PaymentGenerator'
import Tick from '../../Assets/tick.mp3'
import {Howl, Howler} from 'howler'

// const pGenerator = new PaymentGenerator()

class TimerLogic extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     hours: 0,
        //     stagedMinutes: 0,
        //     // value: 0.0
        // }
        this.hour = 0
        this.stagedMinutes = 0
        this.value = 0.0
    }


setValue = valFunc =>{
this.value = valFunc
}

stepValue = v =>{ // v stands for value
    if(v > 1){
        return 1
    }else{

        return Math.round(v * 5) / 5
    }
}


scrollTime = stepVal => {
        var givenValue = Math.round(stepVal*100)
        console.log(`test: ${givenValue}`)
        var  minutes = 0 //300 is max for 5 hours
        this.hours = (givenValue / 20)
        // console.log(stepVal)



        PaymentGenerator(this.hours, this.stagedMinutes)
        // Sound generator

        
          
        return(

            parseInt(`${this.hours}${minutes}`)
            // `0${this.hours}h : ${this.stagedMinutes}m`
        )

}











} // End of Class

export default TimerLogic



// minutes =  Math.round(6000 * givenValue / 100)

        // // get hours
        // if (minutes > 60){
        //     this.hours = Math.floor(minutes / 100)
        // } else if(minutes / 60 === 1){
        //     this.hours = 1
        // }else{
        //     this.hours = 0
        // }
        // // First Check if you're at a full hour
        // if(minutes === 60 || (minutes / 60) === this.hours){
        //     this.stagedMinutes = '00'
        // }
        // // Else run algorithm
        // else{
        //  this.stagedMinutes = (minutes % 60 % 100)
        // }


// var sound = new Howl({
//     src: [Tick], 
//     volume: 0.7
// })