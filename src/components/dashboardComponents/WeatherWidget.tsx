import { WiDaySunny, WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";

export default function WeatherWidget() {
    const weather = {
        location: "Field A",
        temperature: 28,
        condition: "Sunny",
        humidity: 45, // in percentage
        windSpeed: 10, // in km/h
        feelsLike: 30, // in °C
        icon: <WiDaySunny />,
    };

    return (
        <div className="p-6 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="text-6xl text-yellow-500">{weather.icon}</div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-800">{weather.location}</h3>
                        <p className="text-lg text-gray-700">{weather.condition}</p>
                    </div>
                </div>
                <h2 className="text-5xl font-bold text-blue-900">{weather.temperature}°C</h2>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-blue-300"></div>

            {/* Details Section */}
            <div className="grid grid-cols-2 gap-6 text-gray-700">
                <div className="flex items-center space-x-2">
                    <WiHumidity className="text-3xl text-blue-500" />
                    <div>
                        <p className="text-sm font-medium">Humidity</p>
                        <p className="text-lg font-bold">{weather.humidity}%</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <WiStrongWind className="text-3xl text-green-500" />
                    <div>
                        <p className="text-sm font-medium">Wind Speed</p>
                        <p className="text-lg font-bold">{weather.windSpeed} km/h</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <WiThermometer className="text-3xl text-red-500" />
                    <div>
                        <p className="text-sm font-medium">Feels Like</p>
                        <p className="text-lg font-bold">{weather.feelsLike}°C</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <WiDaySunny className="text-3xl text-yellow-500" />
                    <div>
                        <p className="text-sm font-medium">Condition</p>
                        <p className="text-lg font-bold">{weather.condition}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
