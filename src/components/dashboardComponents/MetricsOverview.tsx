import { FaSeedling, FaUserFriends, FaTractor, FaTools } from "react-icons/fa";

export default function MetricsOverview() {
    const metrics = [
        { id: 1, label: "Active Crops", value: 120, icon: <FaSeedling />, bg: "bg-green-100", text: "text-green-700" },
        { id: 2, label: "Staff Members", value: 35, icon: <FaUserFriends />, bg: "bg-blue-100", text: "text-blue-700" },
        { id: 3, label: "Vehicles", value: 15, icon: <FaTractor />, bg: "bg-yellow-100", text: "text-yellow-700" },
        { id: 4, label: "Equipment", value: 50, icon: <FaTools />, bg: "bg-red-100", text: "text-red-700" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
                <div
                    key={metric.id}
                    className={`flex items-center p-4 rounded-lg shadow-md ${metric.bg}`}
                >
                    <div className={`text-3xl ${metric.text} mr-4`}>
                        {metric.icon}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{metric.value}</h2>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
