import project1Logo from '../assets/img7Project1Logo.png';
import project2Logo from '../assets/img8Project2.png';
import project3Logo from '../assets/img20p3.png';
import Courosels from '../component/Courosels';
import { useState } from 'react';
import imgp1c from '../assets/img9p1.png';
import imgp1b from '../assets/img11p1.png';
import imgp1a from '../assets/img13p1.png';

import imgp2a from '../assets/img16p2.png'
import imgp2b from '../assets/img17p2.png'
import imgp2c from '../assets/img18p2.png'

import imgp3a from '../assets/img19p3.png'
import imgp3b from '../assets/img20p3.png'
import imgp3c from '../assets/img21p3.png'

import imgp4a from '../assets/img24p4.png'
import imgp4b from '../assets/img25p4.png'
import imgp4c from '../assets/img26p4.png'

import imgp5a from '../assets/img27p5.png'
import imgp5b from '../assets/img28p5.png'
import imgp5c from '../assets/img29p5.png'


const Portfolio = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [desc, setDesc] = useState<string>('');
    const [vis, setVis] = useState<string>('');
    const [img1c, setImg1c] = useState<string>('');
    const [img2c, setImg2c] = useState<string>('');
    const [img3c, setImg3c] = useState<string>('');


    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const handlePopup = (desc: string, vis: string, img1: string, img2: string, img3: string): void => {
        setDesc(desc);
        setVis(vis);
        togglePopup();
        setImg1c(img1);
        setImg2c(img2);
        setImg3c(img3);
    }

    return (
        <div>
            <div className="underline text-4xl font-bold text-gray-600 flex justify-center mt-6">PROJECTS</div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-3 sm:ml-[200px] sm:mr-[200px] mt-14 sm:h-[550px]  overflow-y-auto scrollbar space-y-10 sm:space-y-0 pl-6 pr-6">
                <div className="relative h-[200px] group">
                    <img src={project1Logo} alt="" className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='font-sans text-2xl underline text-gray-600'>GHOST CHAT</div>
                        <div className=" text-red-400 font-light">MERN STACK</div>
                        <button className="mt-6 h-[40px] w-[100px] border border-red-500 "
                            onClick={() => handlePopup('social media platform facilitating seamless post sharing and user interaction. Integrated features such as uploading posts, liking, disliking, commenting, following, and messaging. Incorporated a notification system for user updates and ensured a consistent experience across devices through responsive design.', 'https://ghosts-chat.onrender.com/', imgp1a, imgp1b, imgp1c)}
                        >LEARN MORE</button>
                    </div>
                </div>
                <div className="relative h-[200px] group">
                    <img src={project2Logo} alt="" className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='font-sans text-2xl underline text-gray-600'>Study resource HUB</div>
                        <div className=" text-red-400 font-light">MERN STACK</div>
                        <button className="mt-6 h-[40px] w-[100px] border border-red-500 "
                            onClick={() => handlePopup('Platform focused on delivering free content material with an emphasis on user experience. Established administrative controls for effective post management, leading the project from concept to completion with a robust, user-friendly outcome.', 'https://study-resource-hub.onrender.com/', imgp2a, imgp2b, imgp2c)}
                        >LEARN MORE</button>
                    </div>
                </div>
                <div className="relative h-[200px] group">
                    <img src={project3Logo} alt="" className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='font-sans text-2xl underline text-gray-600'>Stock Analyzer</div>
                        <div className=" text-red-400 font-light">React.js</div>
                        <button className="mt-6 h-[40px] w-[100px] border border-red-500 "
                            onClick={() => handlePopup('It is a platform where people can analyze a secotor vise price, highlight of the day, top 10 sector', 'https://stock-analyzer-zj0x.onrender.com/', imgp3a, imgp3b, imgp3c)}
                        >LEARN MORE</button>
                    </div>
                </div>
                <div className="relative h-[200px] group">
                    <img src={imgp4a} alt="" className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='font-sans text-2xl underline text-gray-600'>Property seller</div>
                        <div className=" text-red-400 font-light">React.js</div>
                        <button className="mt-6 h-[40px] w-[100px] border border-red-500 "
                            onClick={() => handlePopup('It is a  website where people can list there property and vister and go see it virtually', 'https://property-sellers.onrender.com/', imgp4a, imgp4b, imgp4c)}
                        >LEARN MORE</button>
                    </div>
                </div>
                <div className="relative h-[200px] group">
                    <img src={imgp5a} alt="" className="h-[200px] w-full group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='font-sans text-2xl underline text-gray-600'>Property seller</div>
                        <div className=" text-red-400 font-light">React.js</div>
                        <button className="mt-6 h-[40px] w-[100px] border border-red-500 "
                            onClick={() => handlePopup('It is a home Page Ui design of the social media', 'https://social-media-ui-home.onrender.com/', imgp5a, imgp5b, imgp5c)}
                        >LEARN MORE</button>
                    </div>
                </div>
            </div>
            <Courosels show={showPopup} handleClose={togglePopup} desc={desc} vis={vis} img1={img1c} img2={img2c} img3={img3c}></Courosels>
        </div>
    )
}

export default Portfolio;
