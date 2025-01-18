/*
export function AddButton({ label}: { label: string }) {
    return (
        <button  onClick={onClick} className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-green-700 transition">
            + {label}
        </button>
    );
}*/


interface AddButtonProps {
    label: string;
    onClick: () => void;
}

export function AddButton({ label, onClick }: AddButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-green-700 transition"
        >
            + {label}
        </button>
    );
}




