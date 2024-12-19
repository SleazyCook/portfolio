import ImageGallery from './ImageGallery'

import skills from '../../data/techSkills'
import imageArray from '../../data/image-gallery'

function GuildGaming() {

    // tech stack images
    const guild = ['React.js', 'Typescript', 'HTML 5', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Git', 'Figma']
    const guildArray = skills.filter(skill => 
        guild.includes(skill.name)
    )

    // gallery images
    const guildImages = ['guild gaming map icons', 'guild gaming mobile map', 'guild gaming certificate']
    const gallery = imageArray.filter(image =>
        guildImages.includes(image.alt)
    )

    return(
        <div className='guildgaming experience__section'>

            <div className='guildgaming__header'>
                <div className='guildgaming__header--main'>
                    <img src='https://i.imgur.com/JlNLTHp.png' alt='Guild Gaming logo' />
                    <span>Guild Gaming</span>
                </div>

                <div className='guildgaming__header--sub'>
                    <div className='job-title'>
                        Jr Software Engineer
                    </div>
                    <div>
                        <span>May 2023 - Mar 2024</span>
                        <span>San Marcos, TX - Remote</span>
                    </div>
                </div>
            </div>

            <ul className='experience__details'>
                <li>Create UX/UI components using React.js, TypeScript, and Tailwind</li>
                <li>Unit Testing edge cases and eliminating bugs with JEST</li>
                <li>Weekly scrum updates, department and team communication</li>
                <li>Utilize ReactQuill, ReactQuery, and reCAPTCHA for form functionality and validation</li>
                <li>Assisted Marketing Team with Cold Calling and Market Strategies</li>
            </ul>

            <div className='techstack'>
                <span>Tech Stack:</span>
                <div className='experience__skills-container'>
                    {guildArray.map((guildObj) => {
                        return(
                            <a className='skill-icon' href={guildObj.link}  key={guildObj.id} target='_blank'>
                                <img src={guildObj.img} alt={guildObj.name} style={{width: `${guildObj.width}px`}}/>
                            </a>
                        )
                    })}
                </div>
            </div>

            <ImageGallery gallery={gallery}/>

        </div>
    )
}

export default GuildGaming