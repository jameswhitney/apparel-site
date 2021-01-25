import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ICSmfF7XVJP04nmvA8zSFvg9jZmzrZvA4Ktmgy10QDtXtTDHpSqBv7TRZZ987W18j4BruiYCGNyUpIbY1STNHoZ00pABWPdZ4";

  const onToken = () => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FlashCat Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
