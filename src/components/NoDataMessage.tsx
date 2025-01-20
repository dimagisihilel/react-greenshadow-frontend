import { FiInbox } from "react-icons/fi"; // Importing an icon from React Icons

const NoDataMessage = ({ message }: { message: string }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <FiInbox className="text-gray-400 mb-4" size={80} /> {/* React Icon used here */}
            <p className="text-gray-500 text-lg">{message}</p>
        </div>
    );
};

export default NoDataMessage;
