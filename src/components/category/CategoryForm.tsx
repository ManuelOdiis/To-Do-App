import { useState } from "react";
import useCategoryStore from "../../store/useCategoryStore";

const CategoryForm = () => {
  const addCategory = useCategoryStore((s) => s.addCategory);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-4/5 gap-x-2 rounded-lg bg-white p-4 shadow-md max-md:w-full max-md:flex-col max-md:gap-y-2"
    >
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category name"
        required
        className="w-full rounded border border-gray-300 p-2 text-sm outline-gray-400 "
      />
      <button
        type="submit"
        className="text-nowrap rounded bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600 "
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
