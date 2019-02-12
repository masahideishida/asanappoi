import * as React from "react";
import TaskListItem from "./TaskListItem";
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
      <div className="border border-gey-lighter my-4 py-6 w-2/5 h-full mx-auto">
        {this.state.tasks.map(task => (
          <TaskListItem
            key={task.id}
            title={task.title}
            handleEnterKeyDown={this.newTaskCreate}
            handleBackspaceKeyDown={this.taskDelete}
          />
        ))}
      </div>
    );
  }

  private newTaskCreate = () => {
    const id = this.state.tasks.slice(-1)[0].id + 1;
    const title = "";
    const newTasks = this.state.tasks.slice();
    newTasks.push({ id, title });
    this.setState({ tasks: newTasks });
  };

  private taskDelete = () => {
    if (this.state.tasks.slice(-1)[0].title === "") {
      this.state.tasks.pop();
    }
  };
}

export default TaskList;
