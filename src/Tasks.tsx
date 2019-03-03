import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";
import {
  getTasks,
  changeInput,
  addTask,
  changeCurrentTask,
  deleteTask,
  changeTitle,
  changeDescription
} from "./TasksActions";
import { connect } from "react-redux";
import { IApplicationState } from "./Store";

interface IProps {
  getTasks: typeof getTasks;
  changeInput: typeof changeInput;
  addTask: typeof addTask;
  changeCurrentTask: typeof changeCurrentTask;
  deleteTask: typeof deleteTask;
  changeTitle: typeof changeTitle;
  changeDescription: typeof changeDescription;

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
    this.props.changeTitle(title);
  };

  private handleDescriptionChange = (content: string) => {
    this.props.changeDescription(content);
  };

  private deleteTask = (id: number) => {
    this.props.deleteTask(id);
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
    changeCurrentTask: (e: number) => dispatch(changeCurrentTask(e)),
    deleteTask: (e: number) => dispatch(deleteTask(e)),
    changeTitle: (e: string) => dispatch(changeTitle(e)),
    changeDescription: (e: string) => dispatch(changeDescription(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
