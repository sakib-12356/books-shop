import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links =<>

   <li><NavLink to={`/`} className="btn btn-outline btn-success">Home</NavLink></li>
   {/* <a className="btn btn-outline btn-success">Success</a> */}
      
   <li>
    <NavLink to={`/listedBooks`} className="btn btn-outline btn-success">Listed Books</NavLink>
   </li>
    <li>
    <NavLink to={`/pagesRead`} className="btn btn-outline btn-success">Pages to Read</NavLink>
    </li>
            </>
    
  
    return (
        <div>
          <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul> */}
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-start hidden lg:flex gap-14 ">
    <ul className="menu menu-horizontal px-1 flex gap-8">
     {links}
    </ul>
  </div>
  
 <div className=" gap-4">
   <div className="navbar ">
    <button className="btn bg-pink-400 text-white">Sign In</button>
  </div>
  <div className="navbar">
   <button className="btn  bg-teal-300 text-white">Sign Up</button>
   
  
  </div>
  </div>
</div>
            {/* <nav className="flex gap-20 mt-8 ms-5">
              <h1 className="text-2xl">
                <Link to="/">Home</Link>
              </h1>
              <h1 className="text-2xl">
                <Link to="/about">About</Link>
              </h1>
              <h1 className="text-2xl">
               <Link to="/users">Users</Link>
              </h1>
              <h1 className="text-2xl">
               <Link to="/contact">Contact</Link>
              </h1>
            </nav> */}
        </div>
    );
};

export default Navbar;