import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { tasks, ITasks } from "./TasksData";

type Props = RouteComponentProps<{ id: string }>;
interface IState {
  task?: ITasks;
}

class TaskDetail extends React.Component<Props, IState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public componentDidMount = () => {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const task = tasks.filter(t => t.id === id)[0];
      this.setState({ task });
    }
  };

  public render() {
    const task = this.state.task;
    return (
      <div className="container">
        {task ? (
          <React.Fragment>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </React.Fragment>
        ) : (
          <p>Task not found!</p>
        )}
      </div>
    );
  }
}

export default TaskDetail;
