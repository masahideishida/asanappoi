import * as React from "react";

interface IProps {
  title: string;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TaskInput: React.SFC<IProps> = props => {
  return (
    <form className="w-1/2 m-auto">
      <div className="flex items-center border-b border-b-2 border-teal py-2">
        <input
          type="text"
          id="title"
          className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={props.title}
          onKeyDown={props.onKeyDown}
          onChange={props.onChange}
        />
        <input type="text" className="hidden" />
        <button
          className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={props.onClick}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
