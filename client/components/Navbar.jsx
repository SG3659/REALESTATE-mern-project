import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className=" top-10 p-3 max-w-5xl mx-auto  flex justify-evenly items-center bg-[#E2E8F0]   rounded-3xl">
      <Link to="/">
        <img src={logo} alt="logo" height={160} width={103} loading="lazy" />
      </Link>
      <form className="bg-slate-100 rounded-lg  flex items-center p-2 ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-28 "
        />
        <IoSearch />
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
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
