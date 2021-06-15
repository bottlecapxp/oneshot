import React from 'react'
import '../Pages/pages.css'
import ChooseAccount from '../Components/Cards/Choose_Account/ChooseAccount'

const Main = (props) => {

if(localStorage.getItem('lot') === null){
    localStorage.setItem('lot', props.match.params.location)
}
else if(localStorage.getItem('lot') != null){
localStorage.removeItem('lot')
setTimeout(()=>{
    localStorage.setItem('lot', props.match.params.location)
}, 10)
}


    return(
        <div className='global_container choose_lot'>
            <div id='choose_account_holder'>
            <ChooseAccount title='Continue as Guest' id='0' url='guest'/>
            <ChooseAccount title='Sign In' id='1' url='#'/>
            <p id='new_member_link'>Create New Account</p>
            </div>
        </div>
    )
}

export default Main;