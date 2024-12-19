function ImageGallery({gallery}) {
    return(
        <div className='image-gallery'>
            <img src={gallery[0].img} />
        </div>
    )
}

export default ImageGallery