import { Link } from 'react-router-dom'
import 'animate.css';
const Header = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="text-4xl text-slate-200 font-extrabold animate__animated animate__swing">Fro<span className='text-blue-500'>X</span>en Le<span className='text-blue-500'>G</span>o</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
            </div>
        </div>
    );
};

export default Header;