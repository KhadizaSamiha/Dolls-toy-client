
import { Link, Navigate} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';

import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const SignUp = () => {
    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })

           
    }
    return (
        <div className="hero min-h-screen  rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/3">
                    <img className='rounded-full' src='https://i.ibb.co/j4wDvY8/4720335.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-white ">
                    <div className="card-body bg-blue-600 rounded-lg">
                        <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered bg-slate-200 text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered bg-slate-200 text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white"> Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered bg-slate-200 text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="PhotoUrl" className="input input-bordered bg-slate-200 text-black" />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn border-white bg-white text-blue-600" value="SignUp" />
                            </div>
                            <div> <button className='btn btn-block mt-3 bg-white border-white text-blue-600'><FaGoogle />With Google</button></div>
                        </form>
                        <p className='my-4 text-center'>Have an account? <Link to='/login' className='text-blue-900 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;