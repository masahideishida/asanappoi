import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";
import { connect } from "react-redux";
import { IApplicationState } from "./Store";
import { getCurrent, getNew, getTasks } from "./TasksActions";

interface IProps {
  getTasks: typeof getTasks;
  getCurrent: typeof getCurrent;
  getNew: typeof getNew;
  tasks: ITask[];
  currentTask: ITask;
  newTask: ITask;
}

class Tasks extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <TaskInput
          title={this.props.newTask.title}
          onClick={this.newTaskCreate}
          onKeyDown={this.enterNewTaskCreate}
          onChange={this.handleInputChange}
        />
        <div className="flex flex-col md:flex-row">
          <TaskList
            tasks={this.props.tasks}
            handleTextareaClick={this.changeCurrentTask}
            onCloseClick={this.deleteTask}
            onTextareaChange={this.handleTextareaChange}
          />
          <TaskDetail
            task={this.props.currentTask}
            onChange={this.handleDescriptionChange}
          />
        </div>
      </React.Fragment>
    );
  }

  private changeCurrentTask = (i: number) => {
    this.setState({
      currentTask: this.props.tasks.filter(task => task.id === i)[0]
    });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = this.props.newTask;
    newTask.title = e.currentTarget.value;
    this.setState({ newTask });
  };

  private handleTextareaChange = (title: string) => {
    const currentTask = this.props.currentTask;
    currentTask.title = title;
    this.setState({ currentTask });
  };

  private newTaskCreate = () => {
    const newTasks = this.props.tasks.slice();
    newTasks.push(this.props.newTask);
    const id = newTasks.slice(-1)[0].id + 1;
    const newTask = { id, title: "" };
    const currentTask = newTasks.slice(-1)[0];
    this.setState({ tasks: newTasks, currentTask, newTask });
  };

  private enterNewTaskCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.newTaskCreate();
    }
  };

  private handleDescriptionChange = (content: string) => {
    const currentTask = this.props.currentTask;
    currentTask.description = content;
    this.setState({ currentTask });
  };

  private deleteTask = (id: number) => {
    const newTasks = this.props.tasks.filter(task => task.id !== id);
    const currentTask = { id: 9999, title: "" };
    this.setState({ tasks: newTasks, currentTask });
  };
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    tasks: store.tasks.tasks,
    currentTask: store.tasks.currentTask,
    newTask: store.tasks.newTask
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTasks: () => dispatch(getTasks()),
    getCurrent: () => dispatch(getCurrent()),
    getNew: () => dispatch(getNew())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
