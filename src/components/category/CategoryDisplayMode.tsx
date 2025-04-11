import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useDeleteCategoryWithTasks from "../../hooks/useDeleteCategoryWithTasks";
import Category from "../../types/Category";

interface Props {
  category: Category;
  onEdit: () => void;
}

const CategoryDisplayMode = ({ category, onEdit }: Props) => {
  const deleteCategoryWithTasks = useDeleteCategoryWithTasks();

  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-200 p-2 shadow-sm transition hover:bg-gray-300 ">
      <span className="mr-1 overflow-auto text-sm text-gray-800 ">
        {category.name}
      </span>
      <div className="flex space-x-2">
        <FaRegEdit onClick={onEdit} className="" />
        <MdDeleteForever
          onClick={() => deleteCategoryWithTasks(category.id)}
          className="text-red-600"
        />
      </div>
    </div>
  );
};

export default CategoryDisplayMode;
