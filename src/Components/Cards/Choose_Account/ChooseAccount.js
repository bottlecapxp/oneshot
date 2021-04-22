import React, {useState} from 'react'
import '../Choose_Account/main.css'

const ChooseAccount = (props) => {

    const [selected_option, setSelected_option] = useState({
        title: props.title,
        url: props.url,
        id: props.id
    })

    const Customers_choice = () =>{
        if(selected_option.id === '0'){
            // window.reload.location
            window.location.assign(`${window.location.origin}/${selected_option.url}`)

        } else if(selected_option.id === '1'){
            // window.reload.location

        }
    }

    return (
        <div className='box-shadow' id='account_card' onClick={Customers_choice}>
            <p id='title'>{props.title}</p>
        </div>
    )
}

export default ChooseAccount;