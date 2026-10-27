import React from "react";

function Navbar({data}) {
    const favourite = data.filter(item => item.isAdded)

    return(
        <div className="w-full h-15 flex items-center justify-between px-20 py-2">
            <h1 className="text-xl font-semibold text-orange-600">Orange</h1>
            <div className="flex items-center justify-center gap-2 bg-orange-600 px-2 py-[5px] rounded-md">
                <h5 className="font-semibold text-xs text-white">Favourite</h5>
                <span 
                    className="text-xs text-white bg-[#dadada7b] px-1 rounded"
                    >
                    {favourite.length}
                </span>
            </div>
        </div>
      

    );
}

export default Navbar;