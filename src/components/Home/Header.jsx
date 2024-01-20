
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('You are logged out now'))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/addblog"
        >
          Add Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/allblog"
        >
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/featureblog"
        >
          Featured Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/wishlist"
        >
          Wishlist
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-sm bg-red-500 normal-case' : 'btn btn-ghost btn-sm normal-case'
          }
          to="/win"
        >
          Win Ticket
        </NavLink>
      </li>
     
      {user ? (
        <>
          <div className='ml-24'><img className="lg:w-14 rounded-full avatar ml-" src={user?.photoURL} alt="image" />
          <span className="lg:mr-2">{user?.displayName}</span>
          <a onClick={handleLogOut} className="btn btn-sm">
            Sign out
          </a></div>
        </>
      ) : (
        <>
          <div  >
          <Link to="/login">
            <button className="btn btn-primary  mr-6 btn-sm">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary mr-6 btn-sm">Register</button>
          </Link>
          </div>
        </>
      )}

      
    </>
  );

  return (
    <div className='max-w-[1280px] mx-auto sticky top-0 z-50' >
    <div className="navbar  rounded-sm shadow-xl  bg-transparent">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      
        {/* <a className="font-bold ml-6  lg:text-3xl border">Tour-Blogs</a> */}
        <div className='w-36'>
        <img  src="https://i.ibb.co/1KhRzqY/New-Project.png" alt="tour-blogs" />
        </div>
      
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center ml-36 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">{user ? <></> : <></>}</div>
    </div>
    </div>
  );
};

export default Header;
