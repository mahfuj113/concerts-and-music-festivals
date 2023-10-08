import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li className="mr-5 text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-5 text-lg"><NavLink to='/events'>Events</NavLink></li>
        <li className="mr-5 text-lg"><NavLink to='/tickets'>Tickets</NavLink></li>
        <li className="mr-5 text-lg"><NavLink to='/about'>About</NavLink></li>
        <li className="mr-5 text-lg"><NavLink to='/login'>Login</NavLink></li>
        <li className="mr-5 text-lg"><NavLink to='/register'>Registration</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <p className="text-xl font-bold">Concerts and music events</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="text-lg">{user.displayName}</p>
                                </li>
                                <li>
                                    <button className="btn btn-sm btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to='/login'><button onClick={handleSignOut} className="btn btn-sm btn-ghost">Login</button></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;