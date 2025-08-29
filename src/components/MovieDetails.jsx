import React from "react";

export default function () {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">

        <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h[900vh] overflow-hidden">
            {/* Close Button*/}
            <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all">
            
            
 
            
            

            

            </button>
            {/* Conditional Rendering */}
            <div className="flex items-center justify-center h-96">
                <div className="animate-pulse">
                    <div className="w-16 h-16 border-purple-500 border-t-transparent rounded-full animate-spin">
                        <p>Loading Details...........</p> 

                    </div>

                </div>
                {/* Else */}
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                        

                        <h2 className="text-xl font-bold mt-4">Failed To Load Movies Details</h2>
                        <p className="mt-2 text-neutral-400">Error</p>
                        <button className="">Close</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
