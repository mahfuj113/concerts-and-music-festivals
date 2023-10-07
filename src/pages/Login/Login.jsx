import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn,googleLogin} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <h1 className="text-3xl my-10 text-center">Login your account</h1>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="mt-4">Do not have an account <Link to='/register' className="text-[#F75B5F] font-bold">Register</Link></p>
            </form>
            <div className="md:w-3/4 lg:w-1/2 mx-auto mt-5">
            <button onClick={handleGoogleLogin} className="btn">Google Login</button>
            </div>
        </div>
    );
};

export default Login;