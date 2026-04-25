import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white text-zinc-900 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 h-16 flex items-center">
            <div className="container mx-auto px-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-8 flex-1">
                    <Link to="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc24uoiO9o95saxJEfckq-SH37rPT5VvbPsw&s"
                            alt="Logo"
                            className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer shrink-0"
                        />
                    </Link >
                    <div className="relative group hidden sm:flex items-center flex-1 max-w-[600px]">
                        <span className="absolute left-3 text-zinc-400 group-hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            placeholder="Search for Movies, Events, Plays, Sports..."
                            className="bg-white text-zinc-800 pl-10 pr-4 py-2 w-full rounded-md border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all placeholder:text-zinc-500 text-sm"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6 shrink-0">
                    <button className="text-zinc-600 hover:text-red-500 text-sm font-medium transition-colors hidden xs:block">Pune</button>
                    <Link to="/signin">
                        <button className="bg-red-500 hover:bg-red-600 px-4 md:px-5 py-1.5 rounded text-xs md:text-sm font-semibold transition-all active:scale-95 text-white">
                            Sign in
                        </button>
                    </Link>
                    <button className="text-zinc-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;