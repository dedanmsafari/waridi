import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const inputValues = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [inputs, setInputs] = useState(inputValues);

  const { email, password } = inputs;

  const clearForm = () => {
    setInputs(inputValues);
  };
  const handleSignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);

      clearForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          alert("error signing in");
          console.log(error);
          break;
      }
    }
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={handleSignInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
}
