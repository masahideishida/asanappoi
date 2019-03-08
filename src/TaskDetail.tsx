import * as React from "react";
import { ITask } from "./TasksData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IProps {
  task: ITask;
  onChange: (content: string) => void;
}

const TaskDetail: React.FC<IProps> = props => {
  return (
    <div className="container my-4 m-auto p-2 w-5/6 shadow">
      {props.task && props.task.id !== 9999 ? (
        <React.Fragment>
          <div className="w-full m-auto rounded overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{props.task.title}</h2>
              <ReactQuill
                className="resize-none w-full"
                value={props.task.description || ""}
                onChange={props.onChange}
              />
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
};

export default TaskDetail;
