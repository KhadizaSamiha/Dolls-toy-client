import { Link } from 'react-router-dom'
import 'animate.css';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {
        const { user , logOut} = useContext(AuthContext);
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))

    }
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
                <div>
                    <img className='h-16 w-16 rounded-full' src='https://i.ibb.co/nDD4KLX/17651368-snowflake1.jpg' alt="" />
                </div>
                <Link to='/' className="text-4xl text-slate-200 font-extrabold animate__animated animate__swing">Fro<span className='text-sky-500'>X</span>en Le<span className='text-sky-500'>G</span>o</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-sky-400">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            {user ? <button onClick={handleLogOut} className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">LogOut</button> : <div className="navbar-end">
                <Link to='/login'><button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</button></Link>
            </div>}
        </div>
    );
};

export default Header;