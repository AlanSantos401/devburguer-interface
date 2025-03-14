import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import { CheckoutForm } from "../../components";

import stripePromise from '../../config/stripeConfig';

export function Checkout() {
    const {
        state: { clientSecret },
     } = useLocation();

    if(!clientSecret) {
        return <div>erro, tente novamente.</div>
    }

    return(
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm />
        </Elements>
    );
}