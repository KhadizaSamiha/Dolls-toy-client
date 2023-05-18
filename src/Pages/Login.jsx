

import {Link} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

    const {signIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password )
        .then(result =>{
            const user= result.user;
            console.log(user);
        })
        .catch(error => console.log(error))

        
    }
    return (
        <div className="hero min-h-screen  rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/3">
                <img className='rounded-full' src='https://i.ibb.co/j4wDvY8/4720335.jpg' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-white ">
                <div className="card-body bg-blue-500 rounded-lg">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered bg-slate-200 text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white "> Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="confirm password" className="input input-bordered bg-slate-200 text-black" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-white bg-white text-blue-600" value="Login" />
                        </div>
                       <div> <button className='btn btn-block mt-3 bg-white border-white text-blue-600'><FaGoogle />With Google</button></div>
                    </form>
                    <p className='my-4 text-center'>New to Froxen Lego? <Link to='/signUp' className='text-blue-900 font-bold'>SignUp</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;