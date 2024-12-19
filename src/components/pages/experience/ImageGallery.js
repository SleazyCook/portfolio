import { useState } from 'react'

function ImageGallery({gallery}) {

    const [modalOpen, setModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openModal = (index) => {
        setModalOpen(true)
        setCurrentIndex(index)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex == 0 ? gallery.length - 1 : prevIndex - 1
        )
    }

    const handleCloseModal = (event) => {
        if (event.target.id === 'detailed-media-parent' || event.target.id === 'modal-close') {
            closeModal()
        }
    }

    return(
        <div className='image-gallery'>
            {gallery.map((galleryObj, index) => {
                return(
                    <img 
                        onClick={() => openModal(index)}
                        src={galleryObj.img} 
                        key={index} 
                        alt={galleryObj.alt} />
                )
            })}

            {/* Modal */}
            {modalOpen && (
                <div className="modal" id='detailed-media-parent' onClick={handleCloseModal}>
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal} id='modal-close'>
                        &times;
                        </span>
                        <div className="modal-image-container">
                        <button className="prev" onClick={prevImage}>
                            &lt;
                        </button>
                        <img
                            src={gallery[currentIndex].img}
                            alt={gallery[currentIndex].alt}
                            className="modal-image"
                        />
                        <button className="next" onClick={nextImage}>
                            &gt;
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageGallery