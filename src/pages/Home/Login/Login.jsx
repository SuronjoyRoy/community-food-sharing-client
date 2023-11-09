import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { signIn, signInwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate(); 
    console.log(location);


    const handlLogin = async(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        const toastId = toast.loading('logged in')
            try{
              await signIn(email, password)
              toast.success('logged in successfully', {id: toastId})
              navigate('/');
            }catch(err){
              toast.error(err.message, {id: toastId})
            }

        
    }

    // const handleSingInGoogle = () => {
    //     signInwithGoogle()
    //     .then(result=>{
    //         console.log(result.user)
    //     })
    //    
    // }
    const handleSingInGoogle = async() => {
        try{
          await signInwithGoogle()
            toast.success('logged in success')
            navigate('/');
          }catch(err){
            toast.error(err.message)
          }
        }

    return (
        <div className='bg-[#0000001c] p-20'>

            <form onSubmit={handlLogin} className='md:w-2/4 lg:w-1/2 mx-auto bg-white p-14'>
                <h3 className="text-4xl mb-4 text-center">Login your account</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered"/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

                <p className='text-center mb-4 mt-1'>Do not have an account<Link to='/registration' className='text-blue-600 font-bold pl-1'>Register</Link></p>
                <p className='text-center'><button onClick={handleSingInGoogle} className="btn btn-ghost">google</button></p>
            </form>
            
        </div>
    );
};

export default Login;