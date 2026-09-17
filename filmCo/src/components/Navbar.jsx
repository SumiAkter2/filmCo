import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo-4-removebg-preview.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="max-lg:collapse bg-[#0B1020] shadow-xl w-full py-4  rounded-none">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar ">
          <div className="navbar-start">
            <button className="btn btn-link  ">
              <img className="lg:w-48 w-36" src={logoImg} alt="brand-logo" />
            </button>
          </div>
          {/* center  */}
          <div className="navbar-center text-white hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-6 text-lg font-bold text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EC4899]"
                    : "hover:text-[#EC4899] transition"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/tv-shows"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EC4899]"
                    : "hover:text-[#EC4899] transition"
                }
              >
                Tv Shows
              </NavLink>

              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EC4899]"
                    : "hover:text-[#EC4899] transition"
                }
              >
                Popular
              </NavLink>

              <NavLink
                to="/trending"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EC4899]"
                    : "hover:text-[#EC4899] transition"
                }
              >
                Trending
              </NavLink>
            </ul>
          </div>
          {/* end */}
          <div className="navbar-end">
            {/*  Movies button */}
            <Link
              to="/movies"
              className="btn lg:btn-lg btn-sm border-none bg-[#F97316] text-white lg:text-lg text-sm font-bold hover:bg-[#EC4899] lg:mr-6 rounded-3xl"
            >
              Explore Movies
            </Link>
          </div>
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-link text-white lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
        </div>

        <div className="collapse-content text-white font-bold  lg:hidden z-1">
          <ul className="menu gap-y-4 text-lg mt-6 ml-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#EC4899]" : "hover:text-[#EC4899] transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tv-shows"
              className={({ isActive }) =>
                isActive ? "text-[#EC4899]" : "hover:text-[#EC4899] transition"
              }
            >
              Tv Shows
            </NavLink>

            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive ? "text-[#EC4899]" : "hover:text-[#EC4899] transition"
              }
            >
              Popular
            </NavLink>

            <NavLink
              to="/trending"
              className={({ isActive }) =>
                isActive ? "text-[#EC4899]" : "hover:text-[#EC4899] transition"
              }
            >
              Trending
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
