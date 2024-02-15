import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import images from '../image/Image';

const Index = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOptionChange = (selectedTitle) => {
        // Cari data gambar berdasarkan judul yang dipilih
        const selectedImageData = images.find(image => image.title === selectedTitle);

        // Jika data ditemukan, atur URL gambar sensor yang sesuai
        if (selectedImageData) {
            setSelectedImage(selectedImageData.censor);
        } else {
            setSelectedImage(null);
        }
    };

    return (
        <div>
            <div>
                <Navbar onSelect={handleOptionChange} />
            </div>
            {selectedImage && <img src={selectedImage} alt="Censored Image" />}
        </div>
    );
};

export default Index;
