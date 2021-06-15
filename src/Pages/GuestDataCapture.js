import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'


const GuestDataCapture = (props) => {
const history = useHistory()
const submitedDataCapture = (e) =>{
    e.preventDefault()
    history.push(`/set-time/`)
}
const lotNumber = localStorage.getItem('lot')

    return (
        <div className='global_container choose_lot'>
            <div className='content_holder'>
            <h1 className='WelcomeHeadder' style={{textAlign: 'center'}}>Welcome to Lot #<br /> <strong>{lotNumber}</strong></h1>
            <form className='form' onSubmit={submitedDataCapture}>
                <label className='labels'>Full Name</label>
                <input></input>
                <label className='labels'>Phone Number</label>
                <input></input>
                <div className='licensePlateHolder'>
                    <div className='licensePlate'>
                        <div className='threeSeparations'>
                            <div className='lPlateDot'></div>
                            <div className='lPlateDot'></div>
                        </div>
                        {/* License plate entry */}
                        <div className='line'></div>


                        <div className='plateInput'>
                   
                            <div>
                            <div className='center'>
                            <label className='labels'>Enter License Plate #</label>
                            </div>
                            
                            {/* <h3>Enter License Plate</h3> */}
                            <div className='center'>
                            <input className='licensePlateInput'></input>
                            </div>
                         
                            </div>
 
                        </div> 

                   
                        <div className='line'></div>
                        <div className='threeSeparations'>
                            <div className='lPlateDot'></div>
                            <div className='lPlateDot'></div>
                        </div>
                        

                    </div>
                </div>
                {/* <label className='labels'>License Plate #</label> */}
                {/* <input></input> */}
                <input className='submitBtn box-shadow' type='submit'></input>
            </form>
            </div>

        </div>
    )
}
export default withRouter(GuestDataCapture);