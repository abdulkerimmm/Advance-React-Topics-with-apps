import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredValueName, setEnteredValueName] = useState("");
  const [enteredValueEmail, setEnteredValueEmail] = useState("");
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);

  const isNameValidNow = enteredValueName.trim() !== "";
  const isEmailValid =
    enteredValueEmail.includes("@") && enteredValueEmail.trim() !== "";
  const isInputValid = !isNameValidNow && isNameFocus;
  const isInputValid2 = !isEmailValid && isEmailFocus;
  const isButtonValid = isNameValidNow && isEmailValid;

  let nameInputClasses1 = isInputValid
    ? "form-control invalid"
    : "form-control ";
  let nameInputClasses2 = isInputValid2
    ? "form-control invalid"
    : "form-control ";

  const nameHandlerFunction = (event) => {
    setEnteredValueName(event.target.value);
  };
  const emailHandlerFunction = (event) => {
    setEnteredValueEmail(event.target.value);
  };

  const NameBlurHandler = () => {
    setIsNameFocus(true);
  };
  const NameBlurHandler2 = () => {
    setIsEmailFocus(true);
  };

  const FormHandlerFunction = (e) => {
    e.preventDefault();
    setIsNameFocus(true);
    setIsEmailFocus(true);
    if (!isNameValidNow || !isEmailValid) {
      return;
    }
    console.log("Name:", enteredValueName, "  Email:", enteredValueEmail);
    setEnteredValueName("");
    setEnteredValueEmail("");
    setIsNameFocus(false);
    setIsEmailFocus(false);
  };

  return (
    <form onSubmit={FormHandlerFunction}>
      <div className={nameInputClasses1}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredValueName}
          type="text"
          id="name"
          onChange={nameHandlerFunction}
          onBlur={NameBlurHandler}
        />
        {isInputValid && <p>WRONG name</p>}
      </div>

      <div className={nameInputClasses2}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredValueEmail}
          type="email"
          id="email"
          onChange={emailHandlerFunction}
          onBlur={NameBlurHandler2}
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
