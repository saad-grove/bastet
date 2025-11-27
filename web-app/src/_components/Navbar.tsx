import { Bell, Moon, PanelLeftClose, PanelRightClose } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ toggleSidebar, isSidebarOpen }: NavbarProps) => {
  return (
    <nav className="w-full h-16 dark:bg-black bg-black text-stone-100 dark:text-stone-100 flex items-center px-0 justify-between fixed top-0 left-0 z-50 border-b dark:border-stone-500 border-black">
      <div className="flex justify-between items-center w-full lg:px-2 px-4">
        <div className="flex justify-center items-center lg:gap-x-4 gap-x-2">
          <h1 className="text-4xl font-light text-stone-100 dark:text-stone-100 font-posterama uppercase tracking-tight">
            Ariss
          </h1>
        </div>

        <div className="flex justify-center items-center lg:gap-x-4">
          <button
            className="lg:block hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <PanelLeftClose
                size={16}
                className="text-stone-100 dark:text-stone-100 stroke-[1.5]"
              />
            ) : (
              <PanelRightClose
                size={16}
                className="text-stone-100 dark:text-stone-100 stroke-[1.5]"
              />
            )}
          </button>
          <Moon className="w-4 h-4 stroke-[1.5]" />
          <Bell className="w-4 h-4 stroke-[1.5]" />
          <span className="w-8 h-8 rounded-full bg-orange-500 lg:ml-4 lg:mr-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
