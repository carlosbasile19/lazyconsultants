const LandingLauout = ({ children }: { children: React.ReactNode }
    ) => {
    return (
        <main className="h-full bg-[#121212] overflow-auto text-white !scroll-smooth">
            <div className="mx-auto max-w-screen-xl h-full ">
                    {children}
            </div>
        </main>
    )
    }

export default LandingLauout;