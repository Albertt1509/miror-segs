// Modal.js
import React, { useState } from 'react'
import ModalImg from '../assets/102387271.png'

const Modal = ({ onClose }) => {
    const [confirmed, setConfirmed] = useState(false)

    const handleYesClick = () => {
        setConfirmed(true)
    }

    const handleNoClick = () => {
        onClose()
    }

    return (
        <div className="flex items-center justify-center pt-40">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg z-10 relative">
                <h1 className='font-bold text-2xl'>Peringatan!!!</h1>
                <h1 className='text-xl'>Content 18+</h1>
                <img className="w-50 h-40" src={ModalImg} alt="" />
                {confirmed ? (
                    <>
                        {/* Content yang ditampilkan jika pengguna mengonfirmasi */}
                        <h2>Content yang hanya bisa dilihat oleh 18+</h2>
                    </>
                ) : (
                    <>
                        <p>Apakah Kamu Berumur Diatas 18 Tahun?</p>
                        <div className="flex justify-center ">
                            <button onClick={handleYesClick} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Tidak</button>
                            <button onClick={handleNoClick} className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">Iya</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal
