import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../assets/img2.png'



interface PopupProps {
    show: boolean;
    desc: string;
    vis: string;
    img1: string;
    img2: string;
    img3: string;
    handleClose: () => void;
}

const Courosels: React.FC<PopupProps> = ({ show, handleClose, desc, vis, img1, img2, img3 }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg relative max-w-lg w-full">
                <button onClick={handleClose} className="text-4xl  font-extrabold absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                <Carousel autoPlay >
                    <div>
                        <img src={img1} alt="Slide 1" className='' />
                    </div>
                    <div>
                        <img src={img2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={img3} alt="Slide 3" />
                    </div>
                </Carousel>
                <div>
                    <div>{desc}</div>
                    <a href={vis} target="_blank" rel="noopener noreferrer">
                        <button className='w-[70px] h-[30px] rounded-md bg-slate-700 text-white shadow-inner'>
                            Visit
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
};




export default Courosels;