import React, {useState} from 'react'
import '../Choose_Account/main.css'
import { withRouter } from "react-router-dom";


const ChooseAccount = (props) => {
    // const history = useHistory();

    const [selected_option, setSelected_option] = useState({
        title: props.title,
        url: props.url,
        id: props.id
    })

    const Customers_choice = () =>{
        if(selected_option.id === '0'){
            props.history.push(`/${selected_option.url}`)
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

export default withRouter(ChooseAccount);