export function SearchBar() {
    return (
        <div className="w-full max-w-md">
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 rounded-full border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
            />
        </div>
    );
}


