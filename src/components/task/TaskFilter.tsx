import { cn } from "../../utils";
import useTaskQueryStore from "../../store/useTaskQueryStore";
import TaskFilterType from "../../types/TaskFilterType";
import { capitalize } from "../../utils/formatting";

const TaskFilter = () => {
  const setFilter = useTaskQueryStore((s) => s.setFilter);
  const filterBy = useTaskQueryStore((s) => s.taskQuery.filterBy);
  const filters: TaskFilterType[] = ["completed", "important"];

  return (
    <div className="flex gap-2 pt-15">
      <button
        key="all"
        className={cn(
          "rounded p-1.5 text-sm",
          !filterBy
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-black dark:bg-gray-600 "
        )}
        onClick={() => setFilter(null)}
      >
        All
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          className={cn(
            "rounded p-1.5 text-sm",
            filterBy === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black "
          )}
          onClick={() => setFilter(filter)}
        >
          {capitalize(filter)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
