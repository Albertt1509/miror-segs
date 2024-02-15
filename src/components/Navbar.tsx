import images from '../image/Image';
import React from 'react';

const Navbar = ({ onSelect }) => {
    const handleOptionChange = (e) => {
        const selectedTitle = e.target.value;
        onSelect(selectedTitle);
    };

    return (
        <nav className="bg-pink-500">
            <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-white text-lg font-semibold">Uwogh Segsss!!!</span>
                </div>
                <div className="flex justify-center">
                    <select
                        onChange={handleOptionChange}
                        className="text-gray-300 bg-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-white focus:bg-pink-400"
                        style={{ width: '500px' }}
                    >
                        <option value="-"  >Pasti Pas</option>
                        {images.map((image, index) => (
                            <option key={index} value={image.title}>{image.title}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <button className='bg-white rounded-lg p-1.5 shadow-sm'>Hehe🥵</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
