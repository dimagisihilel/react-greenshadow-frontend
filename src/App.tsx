import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Provider} from "react-redux";
import store from "./store/Store.ts";
import {RootLayout} from "./components/RootLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import CropsPage from "./pages/CropsPage.tsx";
import StaffPage from "./pages/StaffPage.tsx";
import LogsPage from "./pages/LogsPage.tsx";
import VehiclePage from "./pages/VehiclePage.tsx";
import EquipmentPage from "./pages/EquipmentPage.tsx";
import FieldsPage from "./pages/FieldsPage.tsx";
import {MainLayout} from "./components/MainLayout.tsx";



function App() {
    const routes = createBrowserRouter(
        [
            {
                path: "/",
                element: <RootLayout />,
                children: [
                    { path: "", element: <LoginPage /> }, // Default to LoginPage
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
            {
                path: "/", // Important: Same base path as AuthLayout, but different layout
                element: <MainLayout />,
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "field", element: <FieldsPage /> },
                    { path: "crop", element: <CropsPage /> },
                    { path: "staff", element: <StaffPage /> },
                    { path: "logs", element: <LogsPage /> },
                    { path: "vehicles", element: <VehiclePage /> },
                    { path: "equipment", element: <EquipmentPage /> },
                ],
            }
        ]
    );


    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>

        </>
    )
}

export default App
