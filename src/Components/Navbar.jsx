import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import "../styles/Navbar.css";
import logo from "../assets/Automotive Shop Logo.png";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { user, logOut, isDark, setIsdark } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Success!", "Logged out successfully!", "success");
      })
      .catch((err) => {
        Swal.fire("Failed", err.message, "error");
      });
  };

  const navLinks = (
    <>
      <li className="font-medium ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to="/add-products">Add Product</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to="/cart">My Cart</NavLink>
      </li>
      <li className="font-medium">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`${
                isDark && "bg-gray-800 text-white"
              }menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-[120px]" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div>
          <DarkModeToggle onChange={setIsdark} checked={isDark} size={50} />
        </div>
        {user ? (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img referrerPolicy="no-referrer" src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`${
                  isDark && "bg-gray-800 text-white"
                }z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`}
              >
                <li>
                  <NavLink>{user.displayName}</NavLink>
                </li>
                <button onClick={handleLogOut}>
                  <li>
                    <NavLink>Logout</NavLink>
                  </li>
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn border-none bg-[#DD3333] text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
