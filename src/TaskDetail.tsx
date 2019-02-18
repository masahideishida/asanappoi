import * as React from "react";
import { tasks, ITask } from "./TasksData";

interface IProps {
  task: ITask;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TaskDetail: React.FC<IProps> = props => {
  return (
    <div className="container my-4 m-auto p-2 w-5/6 shadow">
      {props.task ? (
        <React.Fragment>
          <div className="w-full m-auto rounded overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{props.task.title}</h2>
              <textarea
                className="resize-none w-full"
                value={props.task.description}
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
