import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler, // Import the Filler plugin
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // Register the Filler plugin
);

export default function GraphsAnalytics() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Crop Yield (kg)",
                data: [120, 190, 300, 500, 200, 400, 450],
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                tension: 0.4,
                fill: true, // Fill the area under the line
            },
            {
                label: "Fertilizer Usage (kg)",
                data: [80, 150, 200, 400, 100, 300, 350],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                tension: 0.4,
                fill: true, // Fill the area under the line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "#4B5563",
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) label += ": ";
                        label += `${context.raw} kg`;
                        return label;
                    },
                },
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleColor: "#FFFFFF",
                bodyColor: "#FFFFFF",
            },
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(229, 231, 235, 0.3)", // Lighter grid lines
                },
                ticks: {
                    color: "#6B7280", // Gray tick labels
                },
            },
            y: {
                grid: {
                    color: "rgba(229, 231, 235, 0.3)",
                },
                ticks: {
                    color: "#6B7280",
                },
            },
        },
    };

    return (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-800">Performance Analytics</h2>
                <p className="text-sm text-gray-600">
                    A visual representation of crop yield and fertilizer usage over time.
                </p>
            </div>

            <div className="h-80">
                <Line data={data} options={options} />
            </div>

            <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-gray-700">
                    <p>
                        <span className="font-medium text-blue-800">Insights:</span> Crop yield is
                        increasing steadily due to optimized fertilizer usage.
                    </p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
                        View Detailed Report
                    </button>
                </div>
            </div>
        </div>
    );
}
