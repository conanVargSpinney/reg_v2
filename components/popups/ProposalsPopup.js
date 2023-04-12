

export default function ProposalsPopup({ togglePopup }) {

    const view = togglePopup ? true : false;

    return (
        <>
            <div className="absolute w-full h-full bg-primary opacity-90 z-0" />

            <div className=" absolute bg-light-lighter p-2 my-12 mx-12 max-w-6xl">
                <div>
                    x
                </div>
                <div className="p-8">
                    <form>
                        <div className="flex space-x-4">
                            <div>
                                <label>Yacht Name</label>
                                <input type="text" className="pl-3 text-gray-800 pr-4 pr-11 py-1 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full"></input>
                            </div>
                            <div>
                                <label>Yacht Type</label>
                                <input type="text" className="pl-3 text-gray-800 pr-4 pr-11 py-1 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full"></input>
                            </div>
                        </div>
                        <div>
                            <label>Use Type</label>
                            <select type="text" className="pl-3 text-gray-800 pr-4 pr-11 py-1 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full">
                                <option>Please select...</option>
                                <option>Private</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="text" className="pl-3 text-gray-800 pr-4 pr-11 py-1 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full"></input>
                        </div>
                        <div className="float-right">
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}