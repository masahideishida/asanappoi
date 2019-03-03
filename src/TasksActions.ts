import { ActionCreator } from "redux";
import { TasksActionTypes, ITasksGetAll } from "./TasksTypes";
import { tasks } from "./TasksData";

export const getTasks: ActionCreator<ITasksGetAll> = () => {
  return {
    type: TasksActionTypes.GETALL,
    tasks
  };
};
