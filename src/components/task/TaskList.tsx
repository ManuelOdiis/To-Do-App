import useTasks from "../../hooks/useTasks";
import TaskListItem from "./TaskListItem";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const TaskList = () => {
  const tasks = useTasks();
  const { focusedIndex, handleKeyDown } = useKeyboardNavigation(tasks);

  return (
    <ul
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="scrollbar-light my-auto h-[calc(100vh-185px)] w-full flex-grow overflow-y-auto rounded-lg bg-white shadow-sm max-md:h-[calc(100vh-241px)] "
    >
      {tasks.length === 0 && (
        <p className="w-full pt-20 text-center text-xl max-md:text-lg max-sm:text-base ">
          No tasks
        </p>
      )}
      {tasks.map((task, index) => (
        <TaskListItem
          key={task.id}
          task={task}
          isFocused={index === focusedIndex}
        />
      ))}
    </ul>
  );
};

export default TaskList;
