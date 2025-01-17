import {SearchBar} from "../components/SearchBar.tsx";
import {AddButton} from "../components/AddButton.tsx";

export default function CropsPage() {
    return (
        <>
            <h1>crops</h1>
            <div className="flex justify-center items-center space-x-20 mb-6">
                {/*Search Bar*/}
                <SearchBar/>

                {/*Add Button after the Search Bar*/}
                <AddButton label="Add Crops"/>
            </div>

            {/*Rest of the page content*/}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Crops List</h2>
                Content here
            </div>
        </>
    )
}