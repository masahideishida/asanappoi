import * as React from "react";
import { ITask, tasks } from "./TasksData";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import TaskInput from "./TaskInput";
import { getTasks } from "./TasksActions";
import { connect } from "react-redux";
import { IApplicationState } from "./Store";

interface IProps {
  getTasks: typeof getTasks;
  tasks: ITask[];
}

interface IState {
  currentTask: ITask;
  newTask: ITask;
}

class Tasks extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      currentTask: tasks[0],
      newTask: { id: tasks.length + 1, title: "" }
    };
  }

  public componentDidMount() {
    this.props.getTasks();
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
            tasks={this.props.tasks}
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
      currentTask: this.props.tasks.filter(task => task.id === i)[0]
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
    const newTasks = this.props.tasks.slice();
    newTasks.push(this.state.newTask);
    const id = newTasks.slice(-1)[0].id + 1;
    const newTask = { id, title: "" };
    const currentTask = newTasks.slice(-1)[0];
    this.setState({ currentTask, newTask });
  };

  private enterNewTaskCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.newTaskCreate();
    }
  };

  private handleDescriptionChange = (content: string) => {
    const currentTask = this.state.currentTask;
    currentTask.description = content;
    this.setState({ currentTask });
  };

  private deleteTask = (id: number) => {
    const newTasks = this.props.tasks.filter(task => task.id !== id);
    const currentTask = { id: 9999, title: "" };
    this.setState({ currentTask });
  };
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    tasks: store.tasks.tasks
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTasks: () => dispatch(getTasks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
