import { ITask } from "./TasksData";

export enum TasksActionTypes {
  GETALL = "TASKS/GETALL"
}

export interface ITasksGetAll {
  type: TasksActionTypes.GETALL;
  tasks: ITask[];
}

export type TasksActions = ITasksGetAll;

export interface ITasksState {
  readonly tasks: ITask[];
}
