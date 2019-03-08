import { Reducer } from "redux";
import { ITasksState, TasksActions, TasksActionTypes } from "./TasksTypes";
import { tasks } from "./TasksData";
import Utils from "./Utils";

const initialTasksState: ITasksState = {
  tasks: [],
  newTask: { id: Utils.newId(), title: "", description: "" },
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
    case TasksActionTypes.CHANGEINPUT: {
      return {
        ...state,
        newTask: {
          ...state.newTask,
          title: action.input
        }
      };
    }
    case TasksActionTypes.ADD: {
      return {
        tasks: state.tasks.concat(action.task),
        currentTask: action.task,
        newTask: {
          id: action.newId,
          title: "",
          description: ""
        }
      };
    }
    case TasksActionTypes.CHANGECURRENT: {
      return {
        ...state,
        currentTask: state.tasks.filter(task => task.id === action.id)[0]
      };
    }
    case TasksActionTypes.DELETE: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
        currentTask:
          state.currentTask.id === action.id
            ? { id: "9999", title: "", description: "" }
            : state.currentTask
      };
    }
    case TasksActionTypes.CHANGETITLE: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task.id !== state.currentTask.id
            ? task
            : {
                ...task,
                title: action.title
              };
        }),
        currentTask: {
          id: state.currentTask.id,
          title: action.title,
          description: state.currentTask.description
        }
      };
    }
    case TasksActionTypes.CHANGEDESCRIPTION: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task.id !== state.currentTask.id
            ? task
            : {
                ...task,
                description: action.content
              };
        }),
        currentTask: {
          id: state.currentTask.id,
          title: state.currentTask.title,
          description: action.content
        }
      };
    }
  }
  return state;
};
