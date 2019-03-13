import { combineReducers, createStore } from "redux";
import { ITasksState } from "./TasksTypes";
import { tasksReducer } from "./TasksReducer";

export interface IApplicationState {
  tasks: ITasksState;
}

const rootReducer = combineReducers<IApplicationState>({
  tasks: tasksReducer
});

export const store = createStore(rootReducer);
