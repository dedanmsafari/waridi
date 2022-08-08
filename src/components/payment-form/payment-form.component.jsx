import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventdefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
