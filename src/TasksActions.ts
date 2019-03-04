import { ActionCreator } from "redux";
import {
  TasksActionTypes,
  ITasksGetAll,
  ITasksAdd,
  ITaskChangeInput,
  ITasksChangeCurrent,
  ITasksDelete,
  ITasksChangeTitle,
  ITasksChangeDescription
} from "./TasksTypes";
import { tasks, ITask } from "./TasksData";

export const getAllTasks: ActionCreator<ITasksGetAll> = () => {
  return {
    type: TasksActionTypes.GETALL,
    tasks
  };
};

export const addTask: ActionCreator<ITasksAdd> = (task: ITask) => {
  return {
    type: TasksActionTypes.ADD,
    task
  };
};

export const deleteTask: ActionCreator<ITasksDelete> = (id: number) => {
  return {
    type: TasksActionTypes.DELETE,
    id
  };
};

export const changeInput: ActionCreator<ITaskChangeInput> = (input: string) => {
  return {
    type: TasksActionTypes.CHANGEINPUT,
    input
  };
};

export const changeCurrentTask: ActionCreator<ITasksChangeCurrent> = (
  id: number
) => {
  return {
    type: TasksActionTypes.CHANGECURRENT,
    id
  };
};

export const changeTitle: ActionCreator<ITasksChangeTitle> = (
  title: string
) => {
  return {
    type: TasksActionTypes.CHANGETITLE,
    title
  };
};

export const changeDescription: ActionCreator<ITasksChangeDescription> = (
  content: string
) => {
  return {
    type: TasksActionTypes.CHANGEDESCRIPTION,
    content
  };
};
