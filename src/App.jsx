function App() {
    return (
        <>
            <section className="flex justify-center items-center border-2 border-green-500 min-h-screen">
                <div className="text-center max-w-[400px] bg-[#200fb7] rounded-3xl">
                    <div className="p-8">
                        <h1 className="text-slate-300 text-[1.85rem]">Delhi</h1>
                    </div>
                    <div className="h-[200px] w-[200px] flex justify-center items-center border-2 rounded-full mx-auto">
                        <h1 className="text-[4rem] text-slate-200">14°C</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[1.5rem] font-bold text-slate-200">
                            Lorem, ipsum.
                        </h1>
                        <p className="text-lg font-semibold text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Incidunt, vitae. Fuga consequuntur recusandae
                            architecto molestias est minus laudantium obcaecati
                            aspernatur.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
