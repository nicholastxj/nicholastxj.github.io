import React from "react";
import { TodoWrapper } from "../components/TaskManager/TodoWrapper";

function TaskManager() {
  const appStyles = {
    textAlign: "center",
  };

  return (
    <div style={appStyles}>
      <TodoWrapper />
    </div>
  );
}

export default TaskManager;
