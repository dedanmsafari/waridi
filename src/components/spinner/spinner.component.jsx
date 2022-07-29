import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";
export const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
