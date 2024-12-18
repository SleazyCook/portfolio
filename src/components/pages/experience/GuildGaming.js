const guildArray = [
    {
        id: 1,
    }
]

function GuildGaming() {
    return(
        <div className='GuildGaming'>
            <div className='guildgaming'>

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
                            <span>May 2023 - March 2024</span>
                            <span>San Marcos, Texas - Remote</span>
                        </div>
                    </div>
                </div>

                <ul className='searchspring__details'>
                    <li>Create UX/UI components using React.js, TypeScript, and Tailwind based on Design team markup</li>
                    <li>Unit Testing edge cases and eliminating bugs with JEST</li>
                    <li>Weekly scrum updates, department and team communication</li>
                    <li>Utilize ReactQuill, ReactQuery, and reCAPTCHA for form functionality and validation</li>
                    <li>Assisted Marketing Team with Cold Calling and Market Strategies</li>
                </ul>

                {/* <div className='techstack'>
                    <span>Tech Stack:</span>
                    <div className='experience__skills-container'>
                        {searchspringArray.map((searchspringObj) => {
                            return(
                                <a className='skill-icon' href={searchspringObj.link}  key={searchspringObj.id} target='_blank'>
                                    <img src={searchspringObj.img} alt={searchspringObj.name} style={{width: `${searchspringObj.width}px`}}/>
                                </a>
                            )
                        })}
                    </div>
                </div> */}

                </div>
        </div>
    )
}

export default GuildGaming