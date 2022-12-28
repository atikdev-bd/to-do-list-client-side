import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import './Navbar.css'

import LogOutIcon from '../../Assets/LogOutIcon/icons8-logout-rounded-30.png'

const Navbar = () => {

  const {user,handleLogOut} = useContext(AuthContext)

  

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className=" nav-link mr-12 lg:block md:block hidden">
        
        <Link className="ml-4" to="/myTask">My Task</Link>
        <Link className="ml-4" to="/addTask">Add Task</Link>
        <Link className="ml-4" to="completeTask">Complete Task</Link>
        <Link className="ml-4" to="register">Register</Link>
      </div>

      <div className="mr-6 border rounded-full bg-gray-400 cursor-pointer p-0.5 hover:bg-red-400">
        <img className="w-6" src={LogOutIcon} alt="" />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="user-img" title={user?.displayName} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <div className="lg:hidden md:hidden">
              <li>
                <Link to="/myTask">My Task</Link>
              </li>
              <li>
                <Link to="/addTask">Add Task</Link>
              </li>
              <li>
                <Link to="completeTask">Complete Task</Link>
              </li>
            </div>

            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link to='/' onClick={handleLogOut}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
