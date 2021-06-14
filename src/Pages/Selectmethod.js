import React from 'react'
import PaymentButtons from '../Components/Buttons/PayOptions/PaymentButtons'
import Google from '../Assets/Google.svg'
import CreditCardIcon from '../Assets/ccIcon.svg'
import Apple from '../Assets/Apple.png'



 const  Selectmethod = () =>{

return(
<div className='global_container choose_lot'>
<div className='stacked_container'>
<h1 className='global_content_title slim'>Choose a payment method</h1>

<div className='position-center'>
<div className='stacked'>
<PaymentButtons title='Google' image={Google}/>
<PaymentButtons title='Apple' image={Apple}/>
<PaymentButtons title='Pay by Card' image={CreditCardIcon}/>
</div>
</div>

</div>

</div>
)

}

export default  Selectmethod; 