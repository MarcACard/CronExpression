
export function Results({ apiOutput, isGenerating }) {
    return (
        <>{(apiOutput || isGenerating) && (
            <div className="flex justify-center">
                <div className="mt-12 border border-slate-600 bg-slate-700 rounded-lg w-full sm:w-[600px]">
                    <div className="p-2 mb-1 text-sm font-semibold text-white">
                        <h3>Result</h3>
                    </div>
                    <div className={"px-4 py-2 rounded-b-lg bg-slate-800" + (isGenerating ? " animate-pulse" : "")}>
                        <div id="results" className="text-center min-h-[2em] md:min-h-[3em] flex items-center justify-center">
                            <span className="text-white text-lg md:text-2xl">{apiOutput}</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}