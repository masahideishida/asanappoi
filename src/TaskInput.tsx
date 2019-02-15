import * as React from "react";

interface IProps {
  title: string;
  onTitleChange: (title: string) => void;
  onTitleInput: () => void;
}

const TaskInput: React.SFC<IProps> = props => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onTitleChange(e.currentTarget.value);
  };

  const handleTitleInput = () => {
    props.onTitleInput();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      return false;
    }
  };

  return (
    <form className="w-5/6 m-auto">
      <div className="flex items-center border-b border-b-2 border-teal py-2">
        <input
          type="text"
          id="title"
          className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={props.title}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleTitleInput}
        >
          タスクを追加する
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
