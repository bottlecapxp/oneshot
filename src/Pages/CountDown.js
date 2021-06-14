import React, { useState, useContext, useEffect } from 'react'



export const CountDown = () => {
    const getSetTime = localStorage.getItem('timeStore')
    const [countDown, setCountDown] = useState({
        hours: Math.round(getSetTime / 100),
        mins: getSetTime % 100,
        secs: 60,
        ms: 1000
    })

   



 

   
    // Set mutable variables for updates
    var updated_hours = countDown.hours, updated_mins = countDown.mins,  updated_secs = countDown.secs, updated_ms = countDown.ms

    useEffect(()=>{
        setInterval(()=>{
            setCountDown({
                hours: updated_hours,
                mins: updated_mins, 
                secs: updated_secs,
                ms: updated_ms
            })
        }, 1000)


    },[])


    const run = () => { 
        updated_secs--
        if(updated_ms === 0){
            updated_secs--
            updated_ms = 100
        }
        if(updated_secs === 0){
            updated_mins--
            updated_secs = 60
        }
        if(updated_mins === 0){
            updated_hours--
            updated_mins = 60
        }
        
        if(updated_hours === 0){
            updated_hours = '00'
        }

        console.log(updated_secs)
        setTimeout(run, 1000)
    }
run()
    // setInterval(run, 1000)

    
    return (
        <div className='global_container choose_lot'>

            <div className='countdown_digits_holder'>

                <span>Remaing Time</span>

                <div className='countdown_adjustment'>
                <div className='countdown_digits'>
                    <span className='digits'>{`${countDown.hours}`}</span>
                    <span className='digits'>{`${countDown.mins}`}</span>
                    <span className='digits' >{`${countDown.secs}`}s</span>
                </div>
                </div>
        <div>Button</div>

            </div>


            {/* Count down time */}



            {/* Buttone to Extend time here */}
        </div>
    )
}