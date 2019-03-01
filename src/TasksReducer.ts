import { Reducer } from "redux";
import { ITasksState, TasksActions, TasksActionTypes } from "./TasksTypes";

const initialTaskState: ITasksState = {
  tasks: [],
  currentTask: { id: 1, title: "" },
  newTask: { id: 9999, title: "" }
};

export const TasksReducer: Reducer<ITasksState, TasksActions> = (
  state = initialTaskState,
  action
) => {
  switch (action.type) {
    case TasksActionTypes.GETALL: {
      return {
        ...state,
        tasks: action.tasks
      };
    }
    case TasksActionTypes.CURRENT: {
      return {
        ...state,
        currentTask: action.currentTask
      };
    }
    case TasksActionTypes.NEW: {
      return {
        ...state,
        newTask: action.newTask
      };
    }
  }
  return state;
};
