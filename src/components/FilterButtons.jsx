import React, { useEffect } from "react";

function FilterButtons({ tabButtons, currentTabButton, onTabButtonChange }) {
    useEffect(() => {
        onTabButtonChange(tabButtons[0]);
    }, []);
    return (
        <div className="flex overflow-auto rounded-lg">
            {tabButtons.map((btn) => (
                <button
                    key={btn}
                    className={`${
                        btn == currentTabButton
                            ? "bg-[#73264c]"
                            : "bg-[#001b4c]"
                    } grow text-white text-sm p-4 duration-150 md:text-base`}
                    onClick={() => onTabButtonChange(btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
