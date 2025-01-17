import { Link } from "react-router";
import { GiPlantWatering, GiGroundSprout } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { RiDashboardFill,RiLogoutBoxRFill} from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FaTractor } from "react-icons/fa6";


export default function SideBar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside
            className={`bg-white text-brown-800 min-h-screen w-64 fixed top-0 left-0 border-r border-gray-300 shadow-lg transform transition-transform duration-300 z-50 ${
                isOpen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0`}
        >
            <div className="p-6 flex flex-col items-center">
                <GiPlantWatering className="text-5xl text-green-700 mb-2" />
                <h1 className="text-2xl font-bold text-green-900">Green Shadow</h1>
            </div>
            <ul className="space-y-2 px-4 mt-4">
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <RiDashboardFill className="text-xl text-green-700" />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/field"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <GiGroundSprout className="text-xl text-green-700" />
                        <span className="font-medium">Fields</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/crop"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <PiPlantFill className="text-xl text-green-700" />
                        <span className="font-medium">Crops</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/staff"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <IoPeople className="text-xl text-green-700" />
                        <span className="font-medium">Staff</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/logs"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <TbReportSearch className="text-xl text-green-700" />
                        <span className="font-medium">Logs</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/vehicles"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <FaTractor className="text-xl text-green-700" />
                        <span className="font-medium">Vehicles</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/equipment"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-green-100 transition"
                    >
                        <FaTools className="text-xl text-green-700" />
                        <span className="font-medium">Equipments</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="flex items-center space-x-2 p-3 rounded-md text-lg hover:bg-red-100 transition"
                    >
                        <RiLogoutBoxRFill className="text-xl text-red-700" />
                        <span className="font-medium text-red-700">Log Out</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
