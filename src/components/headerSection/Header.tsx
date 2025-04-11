import { IoMenuOutline } from "react-icons/io5";
import Logo from "../Logo";
import User from "./User";

const Header = ({ toggleSidebar } : any) => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}}`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-400 border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={toggleSidebar}
            >
              <IoMenuOutline className="text-2xl" />
            </button>
            <div className="flex ms-2 md:me-24">
              <Logo />
            </div>
            <div className="text-center text-white">
              <span className="text-white uppercase font-bold text-sm block xl:hidden">
                To-do list
              </span>
              <time dateTime={dateTimeFormat}>{todayDate}</time>
            </div>
          </div>
          <div className="absolute right-0 scale-[0.8]">
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
