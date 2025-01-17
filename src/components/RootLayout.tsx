import {Outlet} from "react-router";
import { GiPlantWatering } from "react-icons/gi";
import bgImage from "../assets/agri.jpg";

export function RootLayout() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Header */}
            <header className="py-4 bg-opacity-50 backdrop-blur-lg bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-center">
                    {/* Icon as the logo */}
                    <GiPlantWatering className="text-green-800 text-3xl mr-4" />
                    <h1 className="text-2xl font-bold text-green-800 tracking-wider">
                        Green Shadow Pvt Ltd
                    </h1>
                </div>
            </header>

                {/* Main Content */}
                <main className="flex-1 flex justify-center items-center">
                    <div className="w-full max-w-md bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-6">
                        <Outlet /> {/* Renders the child routes (e.g., Login or Signup) */}
                    </div>
                </main>
        </div>
    );
}