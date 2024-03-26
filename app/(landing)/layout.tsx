


const LandingLauout = ({ children }: { children: React.ReactNode }
    ) => {
    return (
        <main className="h-full bg-[#121212] overflow-auto text-white !scroll-smooth">
            <script defer data-domain="www.lazyconsultants.com" src="https://poopup.co/js/script.js"></script>
            <div className="mx-auto max-w-screen-xl h-full ">
                    {children}
            </div>
        </main>
    )
    }

export default LandingLauout;