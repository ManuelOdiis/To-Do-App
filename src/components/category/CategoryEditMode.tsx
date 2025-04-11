import { useState } from "react";
import Category from "../../types/Category";
import useCategoryStore from "../../store/useCategoryStore";
import { FaXmark } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

interface Props {
  category: Category;
  onRestEdit: () => void;
  isFocused: boolean;
}

const CategoryEditMode = ({ category, onRestEdit, isFocused }: Props) => {
  const editCategory = useCategoryStore((s) => s.editCategory);
  const [newCategoryName, setNewCategoryName] = useState(category.name);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isFocused) return;

    if (event.key === "Enter") {
      handleSaveEdit();
    } else if (event.key === "Escape") {
      onRestEdit();
    }
  };

  const handleSaveEdit = () => {
    editCategory(category.id, newCategoryName);
    onRestEdit();
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="flex items-center gap-x-2 rounded-lg bg-gray-200 p-2 shadow-sm "
    >
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        autoFocus
        className="w-full overflow-scroll bg-transparent text-sm outline-none"
      />
      <MdDone onClick={handleSaveEdit} className="text-green-500" size={20} />
      <FaXmark onClick={onRestEdit} className="text-red-500" size={18} />
    </div>
  );
};

export default CategoryEditMode;
