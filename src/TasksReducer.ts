import { Reducer } from "redux";
import { ITasksState, TasksActions, TasksActionTypes } from "./TasksTypes";

const initialTasksState: ITasksState = {
  tasks: []
};

export const tasksReducer: Reducer<ITasksState, TasksActions> = (
  state = initialTasksState,
  action
) => {
  switch (action.type) {
    case TasksActionTypes.GETALL: {
      return {
        ...state,
        tasks: action.tasks
      };
    }
  }
  return state;
};
