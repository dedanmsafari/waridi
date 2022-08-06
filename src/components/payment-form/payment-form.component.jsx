import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

export const PaymentForm = () => {
  return (
    <>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
    </>
  );
};
