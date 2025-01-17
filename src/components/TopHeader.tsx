import { useLocation } from "react-router";
import { FaBars, FaBell, FaUser } from "react-icons/fa";

export default function TopHeader({toggleSidebar,}: { toggleSidebar: () => void; }) {
    const location = useLocation();

    const getPageTitle = (pathName: string) => {
        switch (pathName) {
            case "/dashboard":
                return "Dashboard";
            case "/field":
                return "Field Management";
            case "/crop":
                return "Crops Management";
            case "/staff":
                return "Staff";
            case "/logs":
                return "Monitoring Logs";
            case "/vehicles":
                return "Vehicles";
            case "/equipment":
                return "Equipment";
            default:
                return "Dashboard";
        }
    };

    const title = getPageTitle(location.pathname);

    return (
        <header className="flex items-center justify-between bg-amber-50 px-6 py-4 border-b border-gray-200 shadow-md min-h-20 ml-0 md:ml-64">
            <button
                className="md:hidden text-green-800 text-3xl"
                onClick={toggleSidebar}
            >
                <FaBars />
            </button>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 tracking-wide">
                {title}
            </h1>

            <div className="flex space-x-4">
                <div className="relative group">
                    <FaBell className="text-gray-600 hover:text-green-900 transition duration-200 cursor-pointer text-2xl" />
                    <span className="absolute top-0 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            1
          </span>
                </div>
                <div className="relative group">
                    <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
                        <FaUser className="text-gray-600 text-lg" />
                    </div>
                </div>
            </div>
        </header>
    );
}
