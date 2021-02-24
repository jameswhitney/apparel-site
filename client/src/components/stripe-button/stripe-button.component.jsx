import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ICSmfF7XVJP04nmvA8zSFvg9jZmzrZvA4Ktmgy10QDtXtTDHpSqBv7TRZZ987W18j4BruiYCGNyUpIbY1STNHoZ00pABWPdZ4";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Processed");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was a issue while processing payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FlashCat Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
