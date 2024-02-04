import React from "react";

function ErrorMessage() {
    return (
        <div className="absolute inset-0 m-auto h-[80px] w-[170px] flex justify-center items-center flex-wrap rounded-xl mx-auto shadow-[inset_20px_70px_50px_rgba(0,0,0,0.2)]">
            <h1 className="text-slate-200 font-bold">Not Available</h1>
        </div>
    );
}

export default ErrorMessage;
