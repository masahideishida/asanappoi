import * as React from "react";

interface IProps {
  title: string;
  completed: boolean;
  onTaskClick: () => void;
}

const Task: React.SFC<IProps> = props => {
  const handleTaskClick = () => {
    props.onTaskClick();
  };

  return (
    <div className={props.completed ? "task bg-green" : "task"}>
      <div className="checkbox" onClick={handleTaskClick}>
        click me!
      </div>
      <textarea id="" wrap="off" placeholder={props.title} />
    </div>
  );
};

export default Task;
