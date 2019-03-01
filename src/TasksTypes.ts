import { ITask } from "./TasksData";

export enum TasksActionTypes {
  GETALL = "TASKS/GETALL",
  CURRENT = "TASKS/CURRENT",
  NEW = "TASKS/NEW"
}

export interface ITasksGetAllAction {
  type: TasksActionTypes.GETALL;
  tasks: ITask[];
}

export interface ITasksGetCurrentAction {
  type: TasksActionTypes.CURRENT;
  currentTask: ITask;
}

export interface ITasksGetNewAction {
  type: TasksActionTypes.NEW;
  newTask: ITask;
}

export type TasksActions =
  | ITasksGetAllAction
  | ITasksGetCurrentAction
  | ITasksGetNewAction;

export interface ITasksState {
  readonly tasks: ITask[];
  readonly currentTask: ITask;
  readonly newTask: ITask;
}
