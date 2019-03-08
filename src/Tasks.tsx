import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";
import {
  getAllTasks,
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
  getAllTasks: typeof getAllTasks;
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
    this.props.getAllTasks();
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
    if (e.keyCode === 13 && e.currentTarget.value) {
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
    getAllTasks: () => dispatch(getAllTasks()),
    addTask: (e: ITask) => dispatch(addTask(e)),
    deleteTask: (e: number) => dispatch(deleteTask(e)),
    changeInput: (e: string) => dispatch(changeInput(e)),
    changeCurrentTask: (e: number) => dispatch(changeCurrentTask(e)),
    changeTitle: (e: string) => dispatch(changeTitle(e)),
    changeDescription: (e: string) => dispatch(changeDescription(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
