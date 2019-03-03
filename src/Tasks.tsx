import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";
import {
  getTasks,
  changeInput,
  addTask,
  changeCurrentTask
} from "./TasksActions";
import { connect } from "react-redux";
import { IApplicationState } from "./Store";

interface IProps {
  getTasks: typeof getTasks;
  changeInput: typeof changeInput;
  addTask: typeof addTask;
  changeCurrentTask: typeof changeCurrentTask;

  tasks: ITask[];
  newTask: ITask;
  currentTask: ITask;
}

class Tasks extends React.Component<IProps> {
  public componentDidMount() {
    this.props.getTasks();
  }

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

  private handleTextareaChange = (title: string) => {
    const currentTask = this.props.currentTask;
    currentTask.title = title;
    this.setState({ currentTask });
  };

  private handleDescriptionChange = (content: string) => {
    const currentTask = this.props.currentTask;
    currentTask.description = content;
    this.setState({ currentTask });
  };

  private deleteTask = (id: number) => {
    const currentTask = { id: 9999, title: "" };
    this.setState({ currentTask });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeInput(e.currentTarget.value);
  };

  private newTaskCreate = () => {
    this.props.addTask(this.props.newTask);
  };

  private enterNewTaskCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.newTaskCreate();
    }
  };

  private changeCurrentTask = (id: number) => {
    this.props.changeCurrentTask(id);
  };
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    tasks: store.tasks.tasks,
    newTask: store.tasks.newTask,
    currentTask: store.tasks.currentTask
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTasks: () => dispatch(getTasks()),
    changeInput: (e: string) => dispatch(changeInput(e)),
    addTask: (e: ITask) => dispatch(addTask(e)),
    changeCurrentTask: (e: number) => dispatch(changeCurrentTask(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
