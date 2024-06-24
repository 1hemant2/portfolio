import img1 from '../assets/1Image.jpg'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen">
            <div className="relative">
                <img src={img1} alt="" className='w-full  h-screen sm:h-[780px] md:h-screen  object-cover ' />
                <div className=" absolute top-56 sm:left-96 flex flex-col sm:ml-40 ml-6 text-3xl">
                    <p>
                        Hello, I'm <span className='text-blue-600'>Hemant Kumar</span>.
                    </p>
                    <p>I'm a full stack devloper</p>
                    <div className='flex justify-center mt-4'>
                        <button className=' border border-blue-500 mt-3 p-2' onClick={() => navigate("/about")}>View my work ➡️</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;