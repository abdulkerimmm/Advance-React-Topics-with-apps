import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.payload, isTouch: state.isTouch };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouch: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouch: false };
  }
};

const useInput = (checkit) => {
  const initialState = { value: "", isTouch: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const isValid = checkit(state.value);
  const isInputValid = !isValid && state.isTouch;

  const ruleOfCss = isInputValid ? "form-control invalid" : "form-control";

  const handlerFunction = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };
  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: state.value,
    isValid,
    isInputValid,
    handlerFunction,
    blurHandler,
    reset,
    ruleOfCss,
  };
};

export default useInput;
