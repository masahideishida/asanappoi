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
      <div className="border border-gey-lighter my-4 py-6 w-3/5 h-full mx-auto">
        {this.state.tasks.map(task => (
          <TaskListItem
            key={task.id}
            title={task.title}
            handleEnterKeyDown={this.newTaskCreate}
          />
        ))}
      </div>
    );
  }

  private newTaskCreate = () => {
    const id = this.state.tasks.slice(-1)[0].id + 1;
    const title = "something to do";
    const newTasks = this.state.tasks.slice();
    newTasks.push({ id, title });
    this.setState({ tasks: newTasks });
  };
}

export default TaskList;
