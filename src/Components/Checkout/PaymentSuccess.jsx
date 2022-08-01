import React from 'react'
import { useHistory } from 'react-router-dom'

export const PaymentSuccess = () => {
    const history = useHistory()

    React.useEffect(() => {
        setTimeout(() => {
            return history.push("/")
        }, 8000)
    }, [history]);

    return (
        <div className="container text-center">
            <img
                className=" img-fluid"
                style={{ width: "40%" }}
                src="https://raw.githubusercontent.com/kerrybli/zostel-clone/770d199333b86b96de0dd0e6c20f511761488b5a/src/components/checkout/success.svg" alt="success" />
            <h2 className="my-3 h1 text-success">Payment Successful!</h2>

        </div>
    )
}
