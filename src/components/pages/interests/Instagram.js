import { InstagramEmbed } from 'react-social-media-embed'

function Instagram() {
    return(
        <div className='instagram'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DDnYz2Sp2Ei/?img_index=1" width={328} />
            </div>
        </div>
    )
}

export default Instagram