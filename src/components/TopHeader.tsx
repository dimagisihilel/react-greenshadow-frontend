import { FaBars, FaUser } from "react-icons/fa";

export default function TopHeader({toggleSidebar,}: { toggleSidebar: () => void; }) {
    return (
        <header className="flex items-center justify-between bg-green-100 px-4 py-2 border-b border-gray-200 shadow-md min-h-16 ml-0 md:ml-64">
            {/* Menu Icon */}
            <button className="md:hidden text-green-800 text-3xl" onClick={toggleSidebar}>
                <FaBars />
            </button>

            {/* Welcome Message */}
            <h1 className="text-lg sm:text-xl font-medium text-green-900">
                Welcome back, <span className="font-bold">Manager!</span>
            </h1>

            {/* User Info */}
            <div className="flex items-center space-x-2">
                <div className="rounded-full bg-green-200 w-8 h-8 flex items-center justify-center">
                    <FaUser className="text-green-800 text-lg" />
                </div>
                <span className="text-green-900 font-medium">Manager</span>
            </div>
        </header>
    );
}
