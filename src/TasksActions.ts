import { ActionCreator, AnyAction, Dispatch } from "redux";
import { tasks } from "./TasksData";
import {
  ITasksGetAllAction,
  ITasksGetCurrentAction,
  ITasksGetNewAction,
  ITasksState,
  TasksActionTypes
} from "./TasksTypes";

export const getTasks: ActionCreator<ITasksGetAllAction> = () => {
  return {
    type: TasksActionTypes.GETALL,
    tasks
  };
};

export const getCurrent: ActionCreator<ITasksGetCurrentAction> = () => {
  return {
    type: TasksActionTypes.CURRENT,
    currentTask: tasks[0]
  };
};

export const getNew: ActionCreator<ITasksGetNewAction> = () => {
  return {
    type: TasksActionTypes.NEW,
    newTask: { id: tasks.length + 1, title: "" }
  };
};
