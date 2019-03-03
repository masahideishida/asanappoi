import { ITask } from "./TasksData";

export enum TasksActionTypes {
  GETALL = "TASKS/GETALL",
  CHANGE = "TASKS/CHANGE",
  ADD = "TASKS/ADD",
  CURRENT = "TASKS/CURRENT"
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

export type TasksActions =
  | ITasksGetAll
  | ITaskChangeInput
  | ITasksAdd
  | ITasksChangeCurrent;

export interface ITasksState {
  readonly tasks: ITask[];
  readonly newTask: ITask;
  readonly currentTask: ITask;
}
