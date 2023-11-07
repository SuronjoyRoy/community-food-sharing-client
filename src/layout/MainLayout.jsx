import {Outlet} from 'react-router-dom';
import NavBar from '../pages/Home/Shared/NavBar/NavBar';
import Footer from '../pages/Home/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;