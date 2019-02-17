import * as React from "react";
import TaskListItem from "./TaskListItem";
import { ITask } from "./TasksData";

interface IProps {
  tasks: ITask[];
  onCloseClick: (id: number) => void;
  onTextareaChange: (title: string) => void;
  handleTextareaClick: (id: number) => void;
}

const TaskList: React.FC<IProps> = props => {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    props.onTextareaChange(title);
  };

  return (
    <div className="container m-4 p-4 shadow w-5/6">
      {props.tasks.map(task => (
        <TaskListItem
          key={task.id}
          id={task.id}
          title={task.title}
          onCloseClick={() => props.onCloseClick(task.id)}
          onClick={() => props.handleTextareaClick(task.id)}
          onChange={handleTextareaChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
