import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link className="text-xl font-bold text-blue-600">
              Global Stories
            </Link>
          </div>
          {/* desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-blue-700 "
            >
              Home
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-blue-700 "
                >
                  Profile
                </Link>
                <span>Hello, {currentUser.name}</span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-blue-700 "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-blue-700 "
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-700 hover:bg-gray-200 text-3xl "
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
        {/* mobile menu */}

        <div
          className={`${menuOpen ? "block" : "hidden"} md:hidden flex flex-col`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium active:bg-gray-300"
            >
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium active:bg-gray-300"
                >
                  Profile
                </Link>
                <span>Hello, {currentUser.name}</span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium active:bg-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium active:bg-gray-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
