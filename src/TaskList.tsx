import * as React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  public render() {
    return (
      <ul className="task-list">
        <Task />
        <Task />
        <Task />
      </ul>
    );
  }
}

export default TaskList;
