import img1 from '../../../assets/banner/sharing-a-meal-opti.jpeg';
import img2 from '../../../assets/banner/maxresdefault.jpg';
import img3 from '../../../assets/banner/tb-slider-image-03.jpg';
import img4 from '../../../assets/banner/istockphoto-1094037538-612x612.jpg';
import img5 from '../../../assets/banner/tb-slider-image-05.jpg';
import img6 from '../../../assets/banner/tb-slider-image-06.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                        <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                    <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                    <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                    <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                    <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute rounded-xl flex h-full items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 lg:w-1/3 pl-12'>
                    <h2 className='text-5xl font-bold'>Delicious Foods With Wonderful Eating</h2>
                        <p className='text-2xl'>There are many variations of foods of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;