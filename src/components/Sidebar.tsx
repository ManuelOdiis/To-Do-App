import CategorySelector from "./category/CategorySelector";
import Divider from "./Divider";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: React.ReactNode }) => {
  return (
    <aside
      className={`transition-width flex fixed top-0 left-0 z-40 w-64 h-screen flex-col p-4 pt-20 bg-[#081A51] border-r border-gray-200 sm:relative sm:translate-x-0 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <NavigationMenu />
      <Divider />
      <CategorySelector />

      <Footer />
    </aside>
  );
};

export default Sidebar;
