import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';


const Registration = () => {

    const {createUser}= useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name, email, password, photo);

        setRegisterError('');
        setSuccess("");

        if(password.length<6){
            setRegisterError('password should be atleast 6 characters or longer');
            return 
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('Password do not have a capital letter');
            return
        }  else if (!/[!@#$%^&*]/.test(password)) {
            Swal.fire('Password do not have a special character');
            return
        }

        createUser(email, password)
        .then(result=>{
            console.log(result)
            Swal.fire(
                'Register Successfully!',
               'Congratulations!',
               'success');
        })
        .catch(error=>{
            console.error(error)
            Swal.fire(
                'login failed!',
               'bad lauck!',
               'question');
        })
        
    };

    return (
        <div className='bg-[#0000001c] p-20'>
            <form onSubmit={handleRegister} className='md:w-2/4 lg:w-1/2 mx-auto bg-white p-14'>
                <h3 className="text-4xl mb-4 text-center">Register your account</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="photo" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button> 
                </div>

                <p className='text-center mb-4 mt-1'>
                    Already have an account<Link to='/login' className='text-blue-600 font-bold pl-1'>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Registration;
