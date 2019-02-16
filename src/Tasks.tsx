import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";

interface IState {
  tasks: ITask[];
  currentTask: ITask;
  newTask: ITask;
}

class Tasks extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      tasks,
      currentTask: tasks[0],
      newTask: { id: tasks.length + 1, title: "" }
    };
  }

  public render() {
    return (
      <React.Fragment>
        <TaskInput
          title={this.state.newTask.title}
          onClick={this.newTaskCreate}
          onChange={this.handleInputChange}
        />
        <div className="flex">
          <TaskList
            tasks={this.state.tasks}
            handleTextareaClick={this.changeCurrentTask}
            onCloseClick={this.deleteTask}
          />
          <TaskDetail task={this.state.currentTask} />
        </div>
      </React.Fragment>
    );
  }

  private changeCurrentTask = (i: number) => {
    this.setState({
      currentTask: this.state.tasks.filter(task => task.id === i)[0]
    });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = this.state.newTask;
    newTask.title = e.currentTarget.value;
    this.setState({ newTask });
  };

  private newTaskCreate = () => {
    const newTasks = this.state.tasks.slice();
    newTasks.push(this.state.newTask);
    const newTask = { id: tasks.length + 1, title: "" };
    this.setState({ tasks: newTasks, newTask });
  };

  private deleteTask = (id: number) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };
}

export default Tasks;
