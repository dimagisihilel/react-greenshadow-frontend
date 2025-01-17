import { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar.tsx";
import TopHeader from "./TopHeader.tsx";

export function MainLayout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            <SideBar isOpen={isSidebarOpen} />
            <TopHeader toggleSidebar={toggleSidebar} />
            <div className={`md:ml-64 p-6 transition-all`}>
                <Outlet />
            </div>
        </section>
    );
}
