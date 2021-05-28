import React from 'react'


const Payment = () => {
const monerisCheckout = document.createElement("monerisCheckout");
monerisCheckout.src = "https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js";
monerisCheckout.async = true;

var myCheckout = new monerisCheckout();
myCheckout.setMode("ca");
myCheckout.setCheckoutDiv("monerisCheckout")

// myCheckout.setCallback("page_loaded", myPageLoad);
// myCheckout.setCallback("cancel_transaction", myCancelTransaction);
// myCheckout.setCallback("error_event", myErrorEvent);
// myCheckout.setCallback("payment_receipt", myPaymentReceipt);
// myCheckout.setCallback("payment_complete", myPaymentComplete);

myCheckout.startCheckout('oNRRn4Rcjfj6opGKUp03');

    return (
<div id="monerisCheckout">

</div>
    )
}
export default Payment;