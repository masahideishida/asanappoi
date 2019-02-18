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
          onKeyDown={this.enterNewTaskCreate}
          onChange={this.handleInputChange}
        />
        <div className="flex flex-col md:flex-row">
          <TaskList
            tasks={this.state.tasks}
            handleTextareaClick={this.changeCurrentTask}
            onCloseClick={this.deleteTask}
            onTextareaChange={this.handleTextareaChange}
          />
          <TaskDetail
            task={this.state.currentTask}
            onChange={this.handleDescriptionChange}
          />
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

  private handleTextareaChange = (title: string) => {
    const currentTask = this.state.currentTask;
    currentTask.title = title;
    this.setState({ currentTask });
  };

  private newTaskCreate = () => {
    const newTasks = this.state.tasks.slice();
    newTasks.push(this.state.newTask);
    const id = newTasks.slice(-1)[0].id + 1;
    const newTask = { id, title: "" };
    this.setState({ tasks: newTasks, newTask });
  };

  private enterNewTaskCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.newTaskCreate();
    }
  };

  private handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const currentTask = this.state.currentTask;
    currentTask.description = e.currentTarget.value;
    this.setState({ currentTask });
  };

  private deleteTask = (id: number) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };
}

export default Tasks;
