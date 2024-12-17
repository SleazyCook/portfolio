function Spotify() {

    const spotifyStyle = {
        borderRadius: '12px'
    }

    return(
        <>
            <iframe 
                style={spotifyStyle}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1E399bEzHqzh86?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        </>
    )
}

export default Spotify