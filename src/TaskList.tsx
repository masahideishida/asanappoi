import * as React from "react";
import Task from "./Task";

interface IState {
  title: string;
  completed: boolean;
}

class TaskList extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      title: "something to do",
      completed: false
    };
  }

  public render() {
    return (
      <div className="task-list">
        <Task
          title={this.state.title}
          completed={this.state.completed}
          onTaskClick={this.handleTaskClick}
        />
      </div>
    );
  }

  private handleTaskClick = () => {
    this.setState({
      completed: true
    });
  };
}

export default TaskList;
