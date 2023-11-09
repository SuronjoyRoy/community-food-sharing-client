import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../../assets/img/user.png';
import logo from "../../../../assets/img/logo (2).png";
import UseAuth from "../../../../providers/UseAuth";


const NavBar = () => {
   
    const {user, logOut} = UseAuth();
    console.log(user)
    // const handlSingOut = () =>{
    //     // logOut()
    // }
    const navLinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/avaiablefoods'>Available Foods</NavLink></li>
        <li><NavLink to='/addfood'>Add Food</NavLink></li>
        <li><NavLink to='/managemyfoods'>Manage My Foods</NavLink></li>
        <li><NavLink to='/myfoodrequest'>My Food Request</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="">
                    <img className="hidden lg:flex w-[50%]" src={logo} alt="" />
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
                {user ? (
          <>
            
            <div className="flex items-center gap-3">
            <img className="rounded-full w-[40px]" src={user.photoURL} alt="" />
            <span className="mr-2">{user.displayName}</span>
            </div>
            <button onClick={logOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
            </div>
        </div>

    );
};


export default NavBar;