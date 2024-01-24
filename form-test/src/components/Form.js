import React, { useRef, useState } from "react";
import "./Form.css";
import Card from "./Card";
import { Eror } from "./Eror";

const Form = (props) => {
  const [eror, seteror] = useState(false);
  const [erorMessage, seterorMesage] = useState("");

  const userInputref = useRef();
  const ageInputref = useRef();

  const HandlerForm = (event) => {
    event.preventDefault();
    props.forBlur(eror);
    const enteredName = userInputref.current.value;
    const enteredAge = ageInputref.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      seterorMesage("name or age don't be empty");
      seteror(true);
      return;
    }

    if (+enteredAge < 0) {
      seterorMesage("age should be age>0");
      seteror(true);
      return;
    }
    props.submited(enteredName + " " + enteredAge);
    userInputref.current.value = "";
    ageInputref.current.value = "";
  };

  const changeEror = () => {
    seteror(false);
  };

  return (
    <>
      {eror && <Eror message={erorMessage} changeEror={changeEror}></Eror>}
      <Card className={eror ? "bigoneEror" : "bigone"}>
        <form onSubmit={HandlerForm} className="formu" onClick={changeEror}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              ref={userInputref}
            />
            <label htmlFor="age">age(Years)</label>
            <input type="number" id="age" placeholder="age" ref={ageInputref} />
          </div>
          <button
            style={{ backgroundColor: "purple", color: "white" }}
            type="submit"
          >
            approve
          </button>
        </form>
      </Card>
    </>
  );
};

export default Form;
