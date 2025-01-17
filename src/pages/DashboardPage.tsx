import MetricsOverview from "../components/dashboardComponents/MetricsOverview.tsx";
import WeatherWidget from "../components/dashboardComponents/WeatherWidget.tsx";
import NotificationsSection from "../components/dashboardComponents/NotificationsSection.tsx";
import GraphsAnalytics from "../components/dashboardComponents/GraphsAnalytics.tsx";

export default function DashboardPage() {
    return (
        <>
            <h1>Dashboard</h1>
            <div className="p-6 space-y-6">
                <MetricsOverview/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <NotificationsSection/>
                    <WeatherWidget/>
                </div>
                <GraphsAnalytics/>
            </div>

        </>

    )
}