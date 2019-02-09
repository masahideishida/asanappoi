import * as React from "react";

interface IState {
  title: string;
  completed: boolean;
}

class Task extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "something to do.",
      completed: false
    };
  }

  public render() {
    return (
      <div className={this.state.completed ? "task bg-green" : "task"}>
        <div className="checkbox" onClick={this.handleTaskClick}>
          click me!
        </div>
        <textarea placeholder={this.state.title} />
      </div>
    );
  }

  private handleTaskClick = () => {
    this.setState({
      completed: !this.state.completed
    });
  };
}

export default Task;
