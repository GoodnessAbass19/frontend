import React from "react";
import { Link } from "react-router-dom";
import { UseLogout } from "../Hooks/UseLogout";
import { useAuthContext } from "../Hooks/UseAuthContext";

const Nav = () => {
  const { logout } = UseLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-white">
      <div className="container max-w-screen-2xl mx-auto my-0 px-5 py-5 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold uppercase">workout</h1>
        </Link>

        <nav className="gap-5 flex text-center items-center">
          {user && (
            <div>
              <span> {user.email} </span>
              <button
                onClick={handleClick}
                className="bg-white text-emerald-500 border-2 border-emerald-500 text-xl font-semibold px-5 py-1.5"
              >
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div className="justify-between gap-5 flex text-xl font-semibold">
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
