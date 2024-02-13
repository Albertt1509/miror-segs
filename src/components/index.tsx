// Index.js
import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import BackgroundImg from ''
const Index = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowModal(true)
    }, [])

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className="">
            <div className={showModal ? 'blur-background' : ''}>
                <div className=""></div>
            </div>
            {showModal && <Modal onClose={closeModal} />}
        </div>


    )
}

export default Index
