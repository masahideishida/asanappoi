import * as React from "react";
import Task from "./Task";
import { ITasks, tasks } from "./TasksData";

interface IState {
  tasks: ITasks[];
}

class TaskList extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  public componentDidMount() {
    this.setState({ tasks });
  }

  public render() {
    return (
      <div className="task-list">
        {this.state.tasks.map(task => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    );
  }
}

export default TaskList;
