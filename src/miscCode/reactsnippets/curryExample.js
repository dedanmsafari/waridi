import React, { useRef } from "react";

const userData = {
  firstName: "",
  lastName: "",
};

const { firstName, lastName } = userData;
const CurryExample = () => {
  const userRef = useRef({ [firstName]: "", [lastName]: "" });

  const curriedHandleInputChange = (field) => {
    return (e) => {
      userRef.current = { ...userRef.current, [field]: e.target.value };
    };
  };

  return (
    <div>
      <input onChange={curriedHandleInputChange(firstName)} />
      <input onChange={curriedHandleInputChange(lastName)} />
    </div>
  );
};

export default CurryExample;
