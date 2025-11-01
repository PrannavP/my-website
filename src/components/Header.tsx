const Header = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-800 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-semibold text-white">
                    Prannav Panta
                </div>
                <div className="flex gap-8">
                    {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;