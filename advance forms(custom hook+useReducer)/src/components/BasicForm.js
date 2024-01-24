import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const NameCheck = (inComingValue) => {
    return inComingValue.trim() !== "";
  };
  const EmailCheck = (inComingValue) => {
    return inComingValue.includes("@");
  };

  const {
    enteredValue: enteredFirstName,
    isValid: isValidFirstName,
    isInputValid: hasErrorFirstName,
    handlerFunction: isFirstNameHandlerFunction,
    blurHandler: isFirstNameBlurHandler,
    reset: reset1,
    ruleOfCss: FirstNameCss,
  } = useInput(NameCheck);

  const {
    enteredValue: enteredLastName,
    isValid: isValidLastName,
    isInputValid: hasErrorLastName,
    handlerFunction: isLastNameHandlerFunction,
    blurHandler: isLastNameBlurHandler,
    reset: reset2,
    ruleOfCss: LastNameCss,
  } = useInput(NameCheck);

  const {
    enteredValue: enteredEmail,
    isValid: isValidEmail,
    isInputValid: hasErrorEmail,
    handlerFunction: isEmailHandlerFunction,
    blurHandler: isEmailBlurHandler,
    reset: reset3,
    ruleOfCss: EmailCss,
  } = useInput(EmailCheck);

  const isButtonActive = isValidFirstName && isValidLastName && isValidEmail;

  const submitHnadler = (e) => {
    e.preventDefault();
    if (!isButtonActive) {
      return;
    }
    console.log(
      "name:",
      enteredFirstName,
      " ",
      enteredLastName,
      " email:",
      enteredEmail
    );
    reset1();
    reset2();
    reset3();
  };
  return (
    <form onSubmit={submitHnadler}>
      <div className="control-group">
        <div className={FirstNameCss}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={isFirstNameHandlerFunction}
            onBlur={isFirstNameBlurHandler}
          />
          {hasErrorFirstName && <p>Name must not be empty</p>}
        </div>
        <div className={LastNameCss}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={isLastNameHandlerFunction}
            onBlur={isLastNameBlurHandler}
          />
          {hasErrorLastName && <p>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={EmailCss}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={isEmailHandlerFunction}
          onBlur={isEmailBlurHandler}
        />
        {hasErrorEmail && <p>enter a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isButtonActive}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
