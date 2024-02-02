import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className=" text-sm  sm:text-xl flex justify-evenly bg-[#E2E8F0] min-h-16 fixed top-0 w-full mx-auto shadow-md items-center ">
      <Link to="/">
        <img src={logo} alt="logo" height={160} width={100} loading="lazy" />
      </Link>
      <form className="bg-slate-100 rounded-lg  flex items-center p-1">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:"
        />
        <IoSearch c />
      </form>
      <div>
        <nav className="flex flex-wrap gap-4">
          <ul className="flex gap-4 ">
            <li className=" hidden sm:inline text-slate-700 ">
              <Link to="/">Home</Link>
            </li>
            <li className=" hidden sm:inline text-slate-700 ">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className=" flex gap-4">
            {!isLoggedIn && (
              <Link to="/signin">
                <button>Sign In</button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/profile">
                <button>Profile</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
