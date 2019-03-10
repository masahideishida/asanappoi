import * as React from "react";

interface IProps {
  title: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TaskListItem: React.FC<IProps> = props => {
  const [completed, setTaskCompleted] = React.useState(false);
  const handleCheckClick = () => {
    setTaskCompleted(!completed);
  };

  const refContainer = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (refContainer && refContainer.current) {
      refContainer.current.focus();
    }
  }, []);

  return (
    <div className="w-5/6 mx-auto p-2 my-2 border-b border-b-2 border-teal flex">
      <div className="inline-block mr-2" onClick={handleCheckClick}>
        <svg
          className={completed ? "fill-current text-teal h-6 w-6" : "h-6 w-6"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
        </svg>
      </div>
      <textarea
        className="resize-none appearance-none w-full h-6"
        ref={refContainer}
        value={props.title}
        onChange={props.onChange}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default TaskListItem;
