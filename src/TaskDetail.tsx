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
      <div className="container m-4 p-4 w-5/6 shadow">
        {task ? (
          <React.Fragment>
            <div className="w-full m-auto rounded overflow-hidden">
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{task.title}</h2>
                <p className="text-grey-darker text-base">{task.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  #photography
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  #travel
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  #winter
                </span>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p>Task not found!</p>
        )}
      </div>
    );
  }
}

export default TaskDetail;
