import { MdDeleteForever } from "react-icons/md";
import useTaskStore from "../../store/useTaskStore";
import Task from "../../types/Task";
import { cn } from "../../utils";
import { FaRegEdit, FaStar } from "react-icons/fa";

interface Props {
  task: Task;
  onEdit: () => void;
}

const TaskDisplayMode = ({ task, onEdit }: Props) => {
  const { deleteTask, toggleCompletion, toggleImportance } = useTaskStore();

  return (
    <div className="flex items-center justify-between rounded-lg bg-purple-200 p-2 shadow-sm transition hover:bg-gray-300 ">
      <span
        className={cn(
          "mr-1 overflow-auto text-sm",
          task.isCompleted
            ? "text-gray-400 line-through"
            : "text-gray-800 no-underline "
        )}
      >
        {task.name}
      </span>
      <div className="flex space-x-2">
        <input
          type="checkbox"
          onChange={() => toggleCompletion(task.id)}
          className="text-blue-400"
          checked={task.isCompleted}
        ></input>
        <FaStar
          onClick={() => toggleImportance(task.id)}
          className={cn(
            "text-gray-400",
            task.isImportant && "text-yellow-300 "
          )}
        />
        <FaRegEdit onClick={onEdit} className="" />
        <MdDeleteForever
          onClick={() => deleteTask(task.id)}
          className="text-red-600"
        />
      </div>
    </div>
  );
};

export default TaskDisplayMode;
