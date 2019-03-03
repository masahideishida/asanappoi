import { ActionCreator } from "redux";
import {
  TasksActionTypes,
  ITasksGetAll,
  ITasksAdd,
  ITaskChangeInput,
  ITasksChangeCurrent
} from "./TasksTypes";
import { tasks, ITask } from "./TasksData";

export const getTasks: ActionCreator<ITasksGetAll> = () => {
  return {
    type: TasksActionTypes.GETALL,
    tasks
  };
};

export const changeInput: ActionCreator<ITaskChangeInput> = (input: string) => {
  return {
    type: TasksActionTypes.CHANGE,
    input
  };
};

export const addTask: ActionCreator<ITasksAdd> = (task: ITask) => {
  return {
    type: TasksActionTypes.ADD,
    task
  };
};

export const changeCurrentTask: ActionCreator<ITasksChangeCurrent> = (
  id: number
) => {
  return {
    type: TasksActionTypes.CURRENT,
    id
  };
};
