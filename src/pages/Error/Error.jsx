import { Link } from 'react-router-dom';
import error from '../../assets/img/png-clipart-http-404.png';

const Error = () => {
    return (
        <div>
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
            <img className='w-[80%] m-auto' src={error} alt="error" />
        </div>
    );
};

export default Error;