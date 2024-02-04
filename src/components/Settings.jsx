import React from "react";

function Settings({ setSettingsOpened }) {
    return (
        <div className="h-screen fixed z-10 w-full before:content-[''] before:bg-black before:opacity-85 before:-z-10 before:inset-0 before:absolute border-2 border-red-500 z-10 flex justify-center items-center">
            <div className="h-[300px] w-[500px] bg-indigo-400">
                <button onClick={() => setSettingsOpened(false)}>close</button>
            </div>
        </div>
    );
}

export default Settings;
