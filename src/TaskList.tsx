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
      <div className="border border-gey-lighter my-4 py-6 w-3/5 h-full mx-auto">
        {this.state.tasks.map(task => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    );
  }
}

export default TaskList;
