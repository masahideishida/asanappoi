import { combineReducers, createStore, Store } from "redux";
import { TasksReducer } from "./TasksReducer";
import { ITasksState } from "./TasksTypes";

export interface IApplicationState {
  tasks: ITasksState;
}

const rootReducer = combineReducers<IApplicationState>({
  tasks: TasksReducer
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
