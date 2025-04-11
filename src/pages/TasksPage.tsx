import TaskFilter from "../components/task/TaskFilter";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

const TasksPage = () => {
  return (
    <div className="w-full md:px-5 md:py-4">
      <div className="container mx-auto flex h-full w-full flex-col gap-2 p-4">
        <TaskFilter />
        <TaskList />
      </div>
      <div className="px-4 py-1">
        <TaskForm />
      </div>
    </div>
  );
};

export default TasksPage;
