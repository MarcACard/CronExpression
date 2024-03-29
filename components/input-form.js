import { useState } from 'react';
import { Icons } from '../components/icons';


export function InputForm({ isGenerating, callGenerateEndpoint }) {
    const [userInput, setUserInput] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        callGenerateEndpoint(userInput);
    }

    return (
        <div className="mt-12  md:mt-18 flex flex-col items-center" >
            <div className="rounded-lg bg-slate-700 w-full sm:w-[600px] border border-slate-600">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex items-center px-3 py-2">
                        <input type="text"
                            required
                            value={userInput}
                            onChange={event => { setUserInput(event.target.value) }}
                            className="block mr-3  p-2.5 w-full text-sm sm:text-base rounded-lg bg-slate-800 placeholder-slate-400 text-white"
                            placeholder="Run every hour between 1pm to 4pm everyday of the week..."
                        />
                        <button type="submit" className="inline-flex justify-center p-2  rounded-full cursor-pointer  bg-blue-600 hover:bg-blue-700">
                            {isGenerating
                                ? <Icons.loadingSpinner className="animate-spin h-6 w-6 text-white"/>
                                : <Icons.magicWand className="w-6 h-6 text-white"/>
                            }
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-xs italic text-gray-400 mt-1">Results are generated by AI and may be inconsistent.</p>
        </div >
    )
}