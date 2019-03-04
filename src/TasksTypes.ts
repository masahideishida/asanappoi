import { ITask } from "./TasksData";

export enum TasksActionTypes {
  GETALL = "TASKS/GETALL",
  ADD = "TASKS/ADD",
  DELETE = "TASKS/DELETE",
  CHANGEINPUT = "TASKS/CHANGEINPUT",
  CHANGECURRENT = "TASKS/CURRENT",
  CHANGETITLE = "TASKS/CHANGETITLE",
  CHANGEDESCRIPTION = "TASKS/DESCRIPTION"
}

export interface ITasksGetAll {
  type: TasksActionTypes.GETALL;
  tasks: ITask[];
}

export interface ITasksAdd {
  type: TasksActionTypes.ADD;
  task: ITask;
}

export interface ITasksDelete {
  type: TasksActionTypes.DELETE;
  id: number;
}

export interface ITaskChangeInput {
  type: TasksActionTypes.CHANGEINPUT;
  input: string;
}

export interface ITasksChangeCurrent {
  type: TasksActionTypes.CHANGECURRENT;
  id: number;
}

export interface ITasksChangeTitle {
  type: TasksActionTypes.CHANGETITLE;
  title: string;
}

export interface ITasksChangeDescription {
  type: TasksActionTypes.CHANGEDESCRIPTION;
  content: string;
}

export type TasksActions =
  | ITasksGetAll
  | ITasksAdd
  | ITasksDelete
  | ITaskChangeInput
  | ITasksChangeCurrent
  | ITasksChangeTitle
  | ITasksChangeDescription;

export interface ITasksState {
  readonly tasks: ITask[];
  readonly newTask: ITask;
  readonly currentTask: ITask;
}
