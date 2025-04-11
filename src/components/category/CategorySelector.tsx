import useCategoryStore from "../../store/useCategoryStore";
import NavigationLink from "../NavigationLinks";
import { IoReorderThreeOutline } from "react-icons/io5";

const CategorySelector = () => {
  const categories = useCategoryStore((s) => s.categories);

  return (
    <div className="scrollbar-light  mb-14 flex h-full flex-col space-y-2 overflow-y-auto overflow-x-hidden pr-2">
      {categories.map((cat) => (
        <NavigationLink
          key={cat.id}
          text={cat.name}
          to={"/"}
          icon={IoReorderThreeOutline}
          search={{ categoryId: cat.id }}
        />
      ))}
    </div>
  );
};

export default CategorySelector;
