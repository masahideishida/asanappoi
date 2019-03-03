import { Reducer } from "redux";
import { ITasksState, TasksActions, TasksActionTypes } from "./TasksTypes";
import { tasks } from "./TasksData";

const initialTasksState: ITasksState = {
  tasks: [],
  newTask: { id: tasks.length + 1, title: "" },
  currentTask: tasks[0]
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
    case TasksActionTypes.CHANGE: {
      return {
        ...state,
        newTask: { id: state.tasks.slice(-1)[0].id + 1, title: action.input }
      };
    }
    case TasksActionTypes.ADD: {
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
        newTask: { id: state.tasks.slice(-1)[0].id + 1, title: "" }
      };
    }
    case TasksActionTypes.CURRENT: {
      return {
        ...state,
        currentTask: state.tasks.filter(task => task.id === action.id)[0]
      };
    }
  }
  return state;
};
