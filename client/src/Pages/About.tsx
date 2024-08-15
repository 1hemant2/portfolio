import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import { useState } from 'react';
import Popup from './Popup';

const About = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <div className=''>
            <div className="underline text-4xl font-bold text-gray-600 flex justify-center mt-6">ABOUT</div>
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-7 sm:space-x-10 mt-5 sm:mt-5 '>
                <div className=''>
                    <img src={img2} alt="" className=' w-36 h-36 ' />
                    <div >
                        <div className='pl-10 text-3xl font-serif text-gray-600'>Fast</div>
                        <div>Lag free interaction,</div>
                        <div>my highest priority.</div>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="" className='w-36 h-36' />
                    <div>
                        <div className='pl-7 text-3xl font-serif text-gray-600'>Responsive</div>
                        <div>My layouts will work on any</div>
                        <div>device, big or small.</div>
                    </div>
                </div>
                <div>
                    <img src={img4} alt="" className='w-36 h-36' />
                    <div className='pl-8 text-3xl font-serif text-gray-600'>Intuitive</div>
                    <div>Strong preference for easy to</div>
                    <div>use, intuitive UX/UI.</div>
                </div>
                <div>
                    <img src={img5} alt="" className='w-36 h-36' />
                    <div className='pl-10 text-3xl font-serif text-gray-600'>Dynamic</div>
                    <div>Websites don't have to be static, </div>
                    <div>I love making pages come to life.</div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col justify-center mt-6 '>
                <div className='flex sm:flex-row flex-col  items-center'>
                    <div className='space-y-2 sm:w-[500px] w-[19rem] flex flex-col justify-center overflow-y-auto h-[350px] p-4 border border-black'>

                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md mt-5'>
                            <div className='text-white font-semibold w-[85%] bg-sky-900 px-12'>C/C++</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md mt-5'>
                            <div className='text-white font-semibold w-[85%] bg-sky-900 px-12'>HTML</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>CSS</div>
                        </div>

                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[85%] bg-sky-900 px-12'>JavaScript</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>React.js</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>Node.js</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>Express.js</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>MongoDB</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[85%] bg-sky-900 px-12'>MySQL</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[70%] bg-sky-900 px-12'>Docker</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>Git/GitHub</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[70%] bg-sky-900 px-12'>Socket</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md mt-10'>
                            <div className='text-white font-semibold w-[85%] bg-sky-900 px-12'>C/C++</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md mt-10'>
                            <div className='text-white font-semibold w-[60%] bg-sky-900 px-12'>Java</div>
                        </div>
                        <div className='border-gray-500 border-2 w-full h-[25px] bg-sky-100 rounded-md'>
                            <div className='text-white font-semibold w-[80%] bg-sky-900 px-12'>Talwind CSS</div>
                        </div>
                    </div>
                    <div className='mt-7 sm:mt-2 sm:ml-10'>
                        <img src={img6} alt="" className='w-52 h-64 bg-slate-950 rounded-3xl' />
                        <div className='text-2xl font-mono'>
                            Who's this guy?
                        </div>
                        <button
                            onClick={togglePopup}
                            className="px-4 py-2 border border-black text-white rounded-xl hover:bg-blue-400 transition text-4xl ml-10 mb-4"
                        >
                            ➡️
                        </button>
                    </div>
                </div>

                <Popup show={showPopup} handleClose={togglePopup}>
                    <div className='font-serif'>
                        <p className='mb-2'>
                            I'm Hemant Kumar, a software developer with a B.Tech. in Computer Science and Engineering. I specialize in full-stack development, particularly with React.js, Node.js, and MongoDB. I’ve gained hands-on experience through internships at Sirensys and Celebal Technology, where I worked on creating REST APIs and dynamic frontend components.
                        </p>
                        <p className='mb-2'>
                            In addition to my professional experience, I've developed side projects like Ghost Chat, a scalable social media platform, and Study Resource Hub, a content-sharing site. I'm also an active problem solver with over 400 DSA problems solved on Geeks for Geeks and hold certifications like RHCSA Red Hat.
                        </p>
                        <p>
                            Currently based in Bengaluru, I'm open to new opportunities where I can leverage my skills in building impactful web applications.
                        </p>
                    </div>
                </Popup>
            </div>
        </div>
    )
}

export default About;