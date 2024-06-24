import React from 'react';

interface PopupProps {
    show: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ show, handleClose, children }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg relative max-w-md w-full">
                <button onClick={handleClose} className="text-4xl  font-extrabold absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
