const Header = () => {
    return (
        <>
            <header className="bg-cf-dark-red fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <img
                        className="h-16 my-4"
                        src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
                        alt="CF Logo"/>
                    <nav className="text-white font-medium">
                        <a href="#">Todo App</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;