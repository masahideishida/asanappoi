import { Reducer } from "redux";
import { ITasksState, TasksActions, TasksActionTypes } from "./TasksTypes";
import { tasks } from "./TasksData";
import Tasks from "./Tasks";

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
    case TasksActionTypes.CHANGEINPUT: {
      return {
        ...state,
        newTask: { id: state.tasks.slice(-1)[0].id + 1, title: action.input }
      };
    }
    case TasksActionTypes.ADD: {
      return {
        tasks: state.tasks.concat(action.task),
        currentTask: action.task,
        newTask: { id: state.tasks.slice(-1)[0].id + 1, title: "" }
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
        currentTask: { id: 9999, title: "" }
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
