import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TextPart from "./components/TextPart";

function App() {
  const [texts, setText] = useState(["john 2"]);
  const [blur, setBlur] = useState(false);

  const forBlur = (eror) => {
    setBlur(eror);
  };
  console.log("erorrrr:", blur);
  const submited = (a) => {
    setText((prev) => [...prev, a]);
  };

  // const trt = () => {
  //   setC(false);
  //   console.log("waaa");
  // };
  console.log(texts);
  return (
    <div className="app">
      <Form submited={submited} forBlur={forBlur}></Form>

      <TextPart texts={texts}></TextPart>
    </div>
  );
}

export default App;
