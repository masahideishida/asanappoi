import * as React from "react";
import TaskInput from "./TaskInput";
import TaskListItem from "./TaskListItem";
import { ITask, tasks } from "./TasksData";

interface IProps {
  tasks: ITask[];
  onCloseClick: (id: number) => void;
  handleTextareaClick: (id: number) => void;
}

const TaskList: React.FC<IProps> = props => {
  return (
    <div className="container m-4 p-4 shadow w-5/6">
      {props.tasks.map(task => (
        <TaskListItem
          key={task.id}
          id={task.id}
          title={task.title}
          onCloseClick={() => props.onCloseClick(task.id)}
          onClick={() => props.handleTextareaClick(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
