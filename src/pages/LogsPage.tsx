import {SearchBar} from "../components/SearchBar.tsx";
import {AddButton} from "../components/AddButton.tsx";

export default function LogsPage() {
    return (
        <>
            <h1>Logs</h1>
            <div className="flex justify-center items-center space-x-20 mb-6">
                {/*Search Bar*/}
                <SearchBar/>

                {/*Add Button after the Search Bar*/}
                <AddButton label="Add Log"/>
            </div>

            {/*Rest of the page content*/}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Logs List</h2>
                Content here
            </div>
        </>
    )
}