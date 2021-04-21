import React, {useState} from 'react'
import '../Choose_Account/main.css'

const ChooseAccount = (props) => {

    const [selected_option, setSelected_option] = useState({
        title: props.title,
        id: props.id
    })

    const Customers_choice = () =>{
        if(selected_option.id === '0'){
            console.log('guess account')
        } else if(selected_option.id === '1'){
            console.log('Sign In')
        }
    }

    return (
        <div id='account_card' onClick={Customers_choice}>
            <p id='title'>{props.title}</p>
        </div>
    )
}

export default ChooseAccount;