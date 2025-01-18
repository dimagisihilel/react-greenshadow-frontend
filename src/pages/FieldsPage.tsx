import {AddButton} from "../components/AddButton.tsx";
import {SearchBar} from "../components/SearchBar.tsx";

export default function FieldsPage() {
    return (
        <>
            <h1>fields</h1>
            <div className="flex justify-center items-center space-x-20 mb-6">
                 {/*Search Bar*/}
                <SearchBar/>

                 {/*Add Button after the Search Bar*/}
                {/*<AddButton label="Add Field"/>*/}
                <AddButton label="Add Field" onClick={() => console.log("Add field button clicked")} />

            </div>

             {/*Rest of the page content*/}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Fields List</h2>
                 Content here
            </div>
        </>


    )
}