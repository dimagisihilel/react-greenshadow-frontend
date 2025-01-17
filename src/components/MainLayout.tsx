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
        <section className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 via-green-400 to-green-600">
            <SideBar isOpen={isSidebarOpen}/>
            <TopHeader toggleSidebar={toggleSidebar}/>
            <div className={`md:ml-64 p-6 transition-all`}>
                <Outlet/>
            </div>
        </section>
    );
}
