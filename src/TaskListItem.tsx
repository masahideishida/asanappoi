import * as React from "react";

interface IProps {
  key: number;
  title: string;
  handleEnterKeyDown: () => void;
  handleBackspaceKeyDown: () => void;
}

const TaskListItem: React.SFC<IProps> = props => {
  const [completed, setTaskCompleted] = React.useState(false);

  const handleCheckClick = () => {
    setTaskCompleted(!completed);
  };

  const handleTextareaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      props.handleEnterKeyDown();
    } else if (e.keyCode === 46) {
      props.handleBackspaceKeyDown();
    }
  };

  return (
    <div
      key={props.key}
      className="container items-center w-5/6 mx-auto py-2 my-2 border-b border-b-2 border-teal flex flex-auto"
    >
      <div className="inline-block mr-2" onClick={handleCheckClick}>
        <svg
          className={completed ? "fill-current text-teal h-6 w-6" : "h-6 w-6"}
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
        </svg>
      </div>
      <textarea
        className="resize-none appearance-none w-full h-6"
        onKeyDown={handleTextareaKeyDown}
        rows={1}
        autoFocus={true}
        wrap="off"
        tabIndex={-1}
      />
    </div>
  );
};

export default TaskListItem;
