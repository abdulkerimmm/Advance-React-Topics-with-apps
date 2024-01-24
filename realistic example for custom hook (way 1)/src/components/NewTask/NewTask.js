import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const {
    datas,
    error,
    isLoading,
    httpTasks: enterTaskHandler,
  } = useHttp(true);
  // props.onAddTask(datas);

  const addTaskHandler = (task) => {
    enterTaskHandler(task, props.onAddTask); // Pass the onAddTask callback to useHttp
  };
  return (
    <Section>
      <TaskForm onEnterTask={addTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
