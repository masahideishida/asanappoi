import * as React from "react";
import TaskInput from "./TaskInput";
import TaskListItem from "./TaskListItem";
import { ITasks, tasks } from "./TasksData";

interface IState {
  title: string;
  tasks: ITasks[];
}

class TaskList extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "",
      tasks: []
    };
  }

  public componentDidMount() {
    this.setState({ tasks });
  }

  public render() {
    return (
      <div className="container m-4 p-4 shadow w-5/6 ">
        <TaskInput
          title={this.state.title}
          onTitleChange={this.onTitleChange}
          onTitleInput={this.newTaskCreate}
        />
        {this.state.tasks.map(task => (
          <TaskListItem
            key={task.id}
            title={task.title}
            closeTask={this.deleteTask}
          />
        ))}
      </div>
    );
  }

  private onTitleChange = (title: string) => {
    this.setState({ title });
  };

  private newTaskCreate = () => {
    let id: number;
    if (this.state.tasks.length === 0) {
      id = 1;
    } else {
      id = this.state.tasks.slice(-1)[0].id + 1;
    }
    const title = this.state.title;
    const newTasks = this.state.tasks.slice();
    newTasks.push({ id, title });
    this.setState({ title: "", tasks: newTasks });
  };

  private deleteTask = (key: number) => {
    const newTasks = this.state.tasks.filter(task => task.id !== key);
    this.setState({ tasks: newTasks });
  };
}

export default TaskList;
