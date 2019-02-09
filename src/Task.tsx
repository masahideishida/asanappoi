import * as React from "react";

interface IProps {
  key: number;
  title: string;
  completed: boolean;
}

const Task: React.SFC<IProps> = props => {
  return (
    <div key={props.key} className={props.completed ? "task bg-green" : "task"}>
      <div className="checkbox">click me!</div>
      <textarea placeholder={props.title} />
    </div>
  );
};

export default Task;
