import * as React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  public render() {
    return (
      <div className="task-list">
        <Task />
      </div>
    );
  }
}

export default TaskList;
