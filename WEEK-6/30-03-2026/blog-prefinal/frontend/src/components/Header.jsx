import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <nav className="flex justify-end items-center gap-8 text-xl p-7 bg-gray-200 shadow-sm">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 font-bold"
                            : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/CreateEmployee"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 font-bold"
                            : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Create Employee
                </NavLink>

                <NavLink
                    to="/ListOfEmployee"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-600 font-bold"
                            : "text-gray-700 hover:text-green-500"
                    }
                >
                    List Employee
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
