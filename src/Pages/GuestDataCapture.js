import React from 'react'
import { withRouter } from 'react-router-dom'


const GuestDataCapture = (props) => {
// onSubmit
const submitedDataCapture = (e) =>{
    e.preventDefault()
    props.history.push(`/set-time`)
}

    return (
        <div className='global_container choose_lot'>
            <div className='content_holder'>
            <span className='global_content_title'>Tell Us About Yourself</span>
            <form className='form' onSubmit={submitedDataCapture}>
                <label className='labels'>Full Name</label>
                <input></input>
                <label className='labels'>Phone Number</label>
                <input></input>
                <label className='labels'>License Plate #</label>
                <input></input>
                <input className='submitBtn box-shadow' type='submit'></input>
            </form>
            </div>

        </div>
    )
}
export default withRouter(GuestDataCapture);