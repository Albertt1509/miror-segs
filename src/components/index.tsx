import React, { useEffect, useMemo, useState } from 'react'
// import Modal from './Modal'
import Navbar from './Navbar'
import images from '../image/Image';

const Index = () => {
    const WindowId = useMemo(() => Math.random(), [])
    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);


    useEffect(() => {
        setShowModal(true)
    }, [])

    const closeModal = () => {
        setShowModal(false)
    }
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
        <div className="">
            <div className={showModal ? '' : ''}>
                {/* blur-background */}
                <div className="">
                    <Navbar onSelect={handleOptionChange} />
                </div>
                <div className="">

                    {selectedImage && <img className='p-5 flex justify-center mx-auto' style={{ width: '500px' }} src={selectedImage} alt="Censored Image" />}
                </div>
            </div>
            {/* {showModal && <Modal onClose={closeModal} />} */}
        </div>


    )
}

export default Index
