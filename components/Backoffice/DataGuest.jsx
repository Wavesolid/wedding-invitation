import DataGuestItem from './DataGuestItem';

export default function DataGuest(props){

    const setEditHandler = (dataGuestEdit) => {
        const guestData = {
            ...dataGuestEdit,
        };
        props.onEditDataGuest(guestData);
    }

    return(
        <div className="flex flex-col w-[80%] my-0 mx-auto">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">No. Wa</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Total Person</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Nomor Bangku</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            props.dataGuest.map((dataGuests)=>(
                            <DataGuestItem
                                onEdit={setEditHandler}
                                key={dataGuests._id}
                                name={dataGuests.name}
                                email={dataGuests.email}
                                waNumber={dataGuests.waNumber}
                                totalPerson={dataGuests.totalPerson}
                            />
                            
                            ))
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}