import { ActionCreator } from "redux";
import {
  TasksActionTypes,
  ITasksGetAll,
  ITasksAdd,
  ITaskChangeInput,
  ITasksChangeCurrent,
  ITasksDelete,
  ITasksTitleChange,
  ITasksDescriptionChange
} from "./TasksTypes";
import { tasks, ITask } from "./TasksData";
import { type } from "os";

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

export const deleteTask: ActionCreator<ITasksDelete> = (id: number) => {
  return {
    type: TasksActionTypes.DELETE,
    id
  };
};

export const changeTitle: ActionCreator<ITasksTitleChange> = (
  title: string
) => {
  return {
    type: TasksActionTypes.TITLE,
    title
  };
};

export const changeDescription: ActionCreator<ITasksDescriptionChange> = (
  content: string
) => {
  return {
    type: TasksActionTypes.DESCRIPTION,
    content
  };
};
