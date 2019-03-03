import { ITask } from "./TasksData";

export enum TasksActionTypes {
  GETALL = "TASKS/GETALL",
  CHANGE = "TASKS/CHANGE",
  ADD = "TASKS/ADD",
  CURRENT = "TASKS/CURRENT",
  DELETE = "TASKS/DELETE",
  TITLE = "TASKS/TITLE",
  DESCRIPTION = "TASKS/DESCRIPTION"
}

export interface ITasksGetAll {
  type: TasksActionTypes.GETALL;
  tasks: ITask[];
}

export interface ITaskChangeInput {
  type: TasksActionTypes.CHANGE;
  input: string;
}

export interface ITasksAdd {
  type: TasksActionTypes.ADD;
  task: ITask;
}

export interface ITasksChangeCurrent {
  type: TasksActionTypes.CURRENT;
  id: number;
}

export interface ITasksDelete {
  type: TasksActionTypes.DELETE;
  id: number;
}

export interface ITasksTitleChange {
  type: TasksActionTypes.TITLE;
  title: string;
}

export interface ITasksDescriptionChange {
  type: TasksActionTypes.DESCRIPTION;
  content: string;
}

export type TasksActions =
  | ITasksGetAll
  | ITaskChangeInput
  | ITasksAdd
  | ITasksChangeCurrent
  | ITasksDelete
  | ITasksTitleChange
  | ITasksDescriptionChange;

export interface ITasksState {
  readonly tasks: ITask[];
  readonly newTask: ITask;
  readonly currentTask: ITask;
}
