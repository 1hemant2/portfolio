import React, { useState, ChangeEvent, FormEvent } from 'react';

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        fetch('https://formspree.io/f/manwwbvw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            })
        })
            .then((response) => {
                if (response.ok) {
                    setSuccessMessage('Thank you! Your message has been sent.');
                    setFormData({ name: '', email: '', message: '' });
                    setErrorMessage('');
                } else {
                    setErrorMessage('There was an error sending your message. Please try again later.');
                }
            })
            .catch((error) => {
                setErrorMessage('There was an error sending your message. Please try again later.');
            });
    };

    return (
        <div className="bg-[#868484] text-white h-screen ">
            <form className='flex justify-center items-center pt-40 flex-col' onSubmit={handleSend}>
                <div className="max-w-[40%] min-w-[30%] flex flex-col">
                    <input
                        type="text"
                        placeholder='name'
                        className='bg-black text-white border border-1 border-white'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder='email'
                        className='bg-black text-white border border-1 border-white'
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className='bg-black text-white border border-1 border-white min-h-[150px]'
                        placeholder='write your message'
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className='border border-1 border-black w-[70px] h-[40px] rounded-xl mt-2'>send</button>
            </form>
            <div className="flex justify-center">
                {successMessage && <div className='text-2xl text-emerald-900 mt-6 text-center'>{successMessage}</div>}
                {errorMessage && <div className='text-2xl text-red-900 mt-6 text-center'>{errorMessage}</div>}
            </div>
            <div className="flex  justify-center text-3xl mt-10 space-x-6 text-black">
                <a href="https://www.linkedin.com/in/hemant-kumar-66ba31208/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill cursor-pointer"></i>
                </a>
                <a href="https://github.com/1hemant2" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill cursor-pointer"></i> </a>
                <a href="mailto:hk443957@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-mail-line cursor-pointer"></i>
                </a>
            </div>

        </div>
    );
};

export default Contact;
