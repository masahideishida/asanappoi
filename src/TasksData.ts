export interface ITasks {
  id: number;
  title: string;
  description?: string;
}

export const tasks: ITasks[] = [
  {
    id: 1,
    title: "something to do",
    description: "it is a description for this task. Please read me."
  }
];
