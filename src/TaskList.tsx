import * as React from "react";
import TaskListItem from "./TaskListItem";
import { ITask } from "./TasksData";

interface IProps {
  tasks: ITask[];
  newTask: ITask;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>, id: string) => void;
  onTextareaChange: (title: string) => void;
  handleTextareaClick: (id: string) => void;
}

const TaskList: React.FC<IProps> = props => {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const title = e.currentTarget.value;
    props.onTextareaChange(title);
  };

  return (
    <div className="container my-4 m-auto p-4 shadow w-5/6">
      {props.tasks.map(task => (
        <TaskListItem
          key={task.id}
          title={task.title}
          onClick={() => props.handleTextareaClick(task.id)}
          onKeyDown={e => props.onKeyDown(e, task.id)}
          onChange={handleTextareaChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
