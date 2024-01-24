import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const checkit = (incomingValue) => {
    return incomingValue.trim() !== "";
  };
  const checkit2 = (incomingValue) => {
    return incomingValue.includes("@") && incomingValue.trim() !== "";
  };

  const {
    enteredValue: enteredValueName,
    isValid: isNameValidNow,
    isInputValid: isInputValid,
    handlerFunction: handlerFunctionName,
    blurHandler: blurHandlerName,
    reset: resetName,
  } = useInput(checkit);

  const {
    enteredValue: enteredValueEmail,
    isValid: isEmailValid,
    isInputValid: isInputValid2,
    handlerFunction: handlerFunctionEmail,
    blurHandler: blurHandlerEmail,
    reset: resetEmail,
  } = useInput(checkit2);

  const isButtonValid = isNameValidNow && isEmailValid;

  let nameInputClasses1 = isInputValid
    ? "form-control invalid"
    : "form-control ";
  let nameInputClasses2 = isInputValid2
    ? "form-control invalid"
    : "form-control ";

  const FormHandlerFunction = (e) => {
    e.preventDefault();

    if (!isNameValidNow || !isEmailValid) {
      return;
    }
    console.log("Name:", enteredValueName, "  Email:", enteredValueEmail);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={FormHandlerFunction}>
      <div className={nameInputClasses1}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredValueName}
          type="text"
          id="name"
          onChange={handlerFunctionName}
          onBlur={blurHandlerName}
        />
        {isInputValid && <p>WRONG name</p>}
      </div>

      <div className={nameInputClasses2}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredValueEmail}
          type="email"
          id="email"
          onChange={handlerFunctionEmail}
          onBlur={blurHandlerEmail}
        />
        {isInputValid2 && <p>WRONG email</p>}{" "}
      </div>

      <div className="form-actions">
        <button disabled={!isButtonValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
