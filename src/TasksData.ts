export interface ITasks {
  id: number;
  title: string;
  completed: boolean;
}

export const tasks: ITasks[] = [
  {
    id: 1,
    title: "something to do",
    completed: false
  },
  {
    id: 2,
    title: "anything to do",
    completed: true
  },
  {
    id: 3,
    title: "everything to do",
    completed: false
  },
  {
    id: 4,
    title: "nothing to do",
    completed: false
  }
];
