import { FaExclamationCircle } from "react-icons/fa";

export default function NotificationsSection() {
    const notifications = [
        { id: 1, message: "Irrigation needed in Field A", type: "critical" },
        { id: 2, message: "Fertilizer application due tomorrow", type: "info" },
        { id: 3, message: "Vehicle maintenance overdue", type: "warning" },
    ];

    const getBgColor = (type: string) => {
        switch (type) {
            case "critical":
                return "bg-red-100 text-red-700";
            case "info":
                return "bg-blue-100 text-blue-700";
            case "warning":
                return "bg-yellow-100 text-yellow-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <ul className="space-y-2">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className={`flex items-center p-3 rounded-md ${getBgColor(notification.type)}`}
                    >
                        <FaExclamationCircle className="text-2xl mr-3" />
                        <span>{notification.message}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
