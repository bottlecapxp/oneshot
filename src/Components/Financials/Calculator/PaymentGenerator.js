import { useEffect, useContext } from 'react'
import { PaymentContext } from '../../../Context/PaymentContext'






const PaymentGenerator = (hours, minutes) => {
    const {setNightTime, setNightTimeBilling, setDayTime, setDayTimeBilling, setBilling, setTime,} = useContext(PaymentContext)
    const timeDate = new Date()
    const night_hourly_rate = 6
    const night_minute_rate = 1.5
    const hourly_rate = 4
    const minute_rate = 1
    //parseInt(`${timeDate.getHours()}${timeDate.getMinutes()}`)
    var currentTime = parseInt(`${timeDate.getHours()}${timeDate.getMinutes()}`)
    var setLimit = parseInt(`${hours}${minutes}`)
    var accumalatedTime = currentTime + setLimit
    var minuteCheck = accumalatedTime % 100
    var hourCheck =  Math.floor(accumalatedTime / 100)
    var reg_day_time_min_algorythm
    var currentTime_hr
    var currentTime_min
    var night_overlap_time
    var night_overlap_cost
    var day_overlap_time
    var day_overlap_cost
    var nighttimeHour
    var nighttimeMin
    var nighttime_billing
    var newDayTime_hour
    var newDayTime_min
    var newNightTIme_hour
    var newNightTIme_min
    var newMinutes
    var newHours
    var daytime_billing
    var overlap_billing
    var daytimeHour
    var daytimeMin
    var dayTime
    var totalbilling
    var nightTime
    var night_time_billing


// Accumulated Time Check
    if(hourCheck > 23){
        hourCheck = hourCheck - 24
    }
    if( minuteCheck >= 60){
        newMinutes = minuteCheck - 60
        newHours = Math.floor((hourCheck) + 1)
        accumalatedTime = parseInt(`${newHours}${newMinutes}`)
    if(newMinutes < 10){
            accumalatedTime = parseInt(`${newHours}0${newMinutes}`)
    }
    if(newMinutes === 0){
        accumalatedTime = parseInt(`${newHours}00`)
    }
    }else {
        accumalatedTime = currentTime + setLimit //Current time + Set Limit time
   
    }


    
    useEffect(()=>{
        console.log(`/hour: ${hours}`)
           console.log(`/minute: ${minutes}`)
           console.log(`currentTime: ${currentTime}`)

        // STRICTLY DAYTIME
        if(currentTime > 600 && accumalatedTime <= 1800){ // current_time < 
            dayTime = parseInt(`${hours}${minutes}`)
            night_overlap_time = 0
            overlap_billing = 0
            daytime_billing = hours * hourly_rate + (minutes / 15) * minute_rate
            totalbilling = daytime_billing + overlap_billing

            // how much day time 
            console.log(`/daytime: ${dayTime}`)

            //day time cost 
            console.log(`/daytime_billing: ${daytime_billing}`)
            //how much night time
            console.log(`/nighttime: ${night_overlap_time}`)
            // night time cost 
            console.log(`night Cost: $${overlap_billing}`)

            setDayTime(dayTime)
            setDayTimeBilling(daytime_billing)
            setNightTime(night_overlap_time)
            setNightTimeBilling(overlap_billing)
            setBilling(totalbilling)
        }        

        // DAYTIME OVERLAPPING TO NIGHT 
        else if(currentTime <= 1800 && accumalatedTime > 1800){ //current_time >
            
            night_overlap_time = accumalatedTime - 1800
            night_overlap_cost = night_overlap_time * .1 //.1 is dollar value of 6 dollars per hour

            // Math.floor((1800-currentTime) / 100)
            daytimeHour = Math.floor((1800-currentTime) / 100)// selected hours before night time
            reg_day_time_min_algorythm = Math.floor(60 - (currentTime % 100))
            if(reg_day_time_min_algorythm === 60){
                reg_day_time_min_algorythm = `${0}${0}`
            }
            daytimeMin = reg_day_time_min_algorythm// selected mins before night time
            dayTime = parseInt(`${daytimeHour}${daytimeMin}`)
            daytime_billing = daytimeHour * hourly_rate + Math.floor(daytimeMin * 0.27)
        

            if(night_overlap_time > 99){
             newNightTIme_hour = Math.floor(night_overlap_time / 100)
             newNightTIme_min = Math.floor(night_overlap_time % 100)
             overlap_billing = (newNightTIme_hour * 6) + (newNightTIme_min * 0.1)
             night_overlap_time = parseInt(`${newNightTIme_hour}${newNightTIme_min}`)
           }else{
            overlap_billing = Math.round((night_overlap_cost + Number.EPSILON) * 100) / 100
            }
           if(night_overlap_time < 99 && night_overlap_time > 60 ){
            newNightTIme_hour = Math.floor(night_overlap_time / 60)
            newNightTIme_min = Math.floor(night_overlap_time % 60)
            overlap_billing = (newNightTIme_hour * 6) + (newNightTIme_min * 0.1)
            night_overlap_time = parseInt(`${newNightTIme_hour}${newNightTIme_min}`)
           }
           
           
            // how much day time 
            console.log(`/daytime: ${dayTime}`)
            //day time cost 
            console.log(`/daytime_billing: ${daytime_billing + overlap_billing}`)
            //how much night time
            console.log(`/nighttime: ${night_overlap_time}`)
            // night time cost 
            console.log(`night Cost: $${overlap_billing}`)
            

            
            setDayTime(dayTime)
            setDayTimeBilling(daytime_billing)
            setNightTime(night_overlap_time)
            setNightTimeBilling(overlap_billing)
           
            // daytime_billing = 1800 - currentTime
            totalbilling = daytime_billing + overlap_billing
            setBilling(totalbilling) //daytime billing
        }
        
        // STRICTLY NIGHT CALCULATIONS
        else if(currentTime > 1800 && accumalatedTime < 2359 || currentTime < 600 && accumalatedTime <= 600 ){
            dayTime=0
            night_overlap_time = 0
            overlap_billing = 0
            daytime_billing = 0
            nightTime = parseInt(`${hours}${minutes}`) // Might need
            night_time_billing = hours * night_hourly_rate + (minutes / 15) * night_minute_rate

   
            setDayTime(dayTime)
            setDayTimeBilling(daytime_billing)
            setNightTime(night_overlap_time)
            setNightTimeBilling(night_time_billing)
            setBilling(night_time_billing) 
           
        } // NIGHT OVERLAPPING TO DAY 
        else if(currentTime <= 600 && accumalatedTime > 600){ //current_time >
            
            day_overlap_time = accumalatedTime - 600
            day_overlap_cost = Math.floor(day_overlap_time * .07) //.07 is dollar value of 4 dollars per hour

            nighttimeHour = Math.floor((600-currentTime) / 100) // selected hours before night time
            nighttimeMin = Math.floor(60 - (currentTime % 100))// selected mins before night time
            nightTime = parseInt(`${nighttimeHour}${nighttimeMin}`)
            nighttime_billing = nighttimeHour * night_hourly_rate + Math.floor(nighttimeMin * 0.07)
          

            if(day_overlap_time > 99){
             newDayTime_hour = Math.floor(day_overlap_time / 100)
             newDayTime_min = Math.floor(day_overlap_time % 100)
             overlap_billing = Math.round(((newDayTime_hour * 4) + (newDayTime_min * 0.07) + Number.EPSILON) * 100) / 100
             day_overlap_time = parseInt(`${newDayTime_hour}${newDayTime_min}`)
           }else{
            overlap_billing = Math.round((day_overlap_cost + Number.EPSILON) * 100) / 100
           }
           
       
            // night_overlap_time = Math.round((night_overlap_cost + Number.EPSILON) * 100) / 100
            // how much day time 
            console.log(`/daytime: ${day_overlap_time}`)
            //day time cost 
            console.log(`/daytime_billing: ${daytime_billing + overlap_billing}`)
            //how much night time
            console.log(`/nighttime: ${night_overlap_time}`)
            // night time cost 
            console.log(`night Cost: $${overlap_billing}`)
            

            
            setDayTime(day_overlap_time)
            setDayTimeBilling(overlap_billing)
            setNightTime(nightTime)
            setNightTimeBilling(nighttime_billing)
           
            // daytime_billing = 1800 - currentTime
            totalbilling = Math.round((nighttime_billing + overlap_billing + Number.EPSILON) * 100) / 100
            setBilling(totalbilling) //daytime billing
        }

        // NIGHT GOING INTO DAY BREAK

        // Set Selected time here for tracking and to be pushed to local storage by confirm BTN
        setTime(parseInt(`${hours}${minutes}`))
    }, [hours, minutes])

}



export default PaymentGenerator;
 

