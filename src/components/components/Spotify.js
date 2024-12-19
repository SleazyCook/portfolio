function Spotify() {

    const spotifyStyle = {
        borderRadius: '12px'
    }

    return(
        <div className='spotify'>
            <iframe 
                style={spotifyStyle}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1E399bEzHqzh86?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Spotify