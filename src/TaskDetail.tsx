import * as React from "react";
import { ITask } from "./TasksData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IProps {
  task: ITask;
  onDescriptionChange: (content: string) => void;
  onTitleChange: (title: string) => void;
}

const TaskDetail: React.FC<IProps> = props => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    props.onTitleChange(title);
  };

  return (
    <div className="container my-4 m-auto p-2 w-5/6 shadow">
      {props.task && props.task.id !== "9999" ? (
        <React.Fragment>
          <div className="w-full m-auto rounded overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">
                <input
                  type="text"
                  id="title"
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Write a task title"
                  value={props.task.title}
                  onChange={handleInputChange}
                />
              </h2>
              <ReactQuill
                className="resize-none w-full"
                value={props.task.description}
                onChange={props.onDescriptionChange}
              />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div />
      )}
    </div>
  );
};

export default TaskDetail;
