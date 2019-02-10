import * as React from "react";

interface IProps {
  key: number;
  title: string;
  completed: boolean;
}

const Task: React.SFC<IProps> = props => {
  return (
    <div
      key={props.key}
      className="container items-center w-5/6 mx-auto py-2 my-2 border-b border-b-2 border-teal flex"
    >
      <div className="inline-block mr-2"><svg className={props.completed ? "fill-current text-teal h-6 w-6" : "h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg></div>
      <textarea
        className="resize-none appearance-none w-5/6 h-6"
        placeholder={props.title}
      />
    </div>
  );
};

export default Task;
