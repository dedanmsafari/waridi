import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonContainer } from "./sign-in-form.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import {
  signInGoogleStart,
  signInWithEmailAndPasswordStart,
} from "../../store/user/user.actions";

const inputValues = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [inputs, setInputs] = useState(inputValues);
  const dispatch = useDispatch();
  const { email, password } = inputs;

  const clearForm = () => {
    setInputs(inputValues);
  };
  const handleSignInWithGoogle = () => {
    dispatch(signInGoogleStart());
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(signInWithEmailAndPasswordStart(email, password));

      clearForm();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Wrong password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("User not found");
          break;
        default:
          alert("error signing in");
          console.log(error);
          break;
      }
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <SignInContainer>
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
        <ButtonContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}
