const guildArray = [
    {
        id: 1,
        name: 'React',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
        link: 'https://reactjs.org/'
    },
    {
        id: 2,
        name: 'Typescript',
        img: 'https://github.com/user-attachments/assets/0f66057f-e906-4c07-b2b9-dcdd8034c947',
        link: 'https://www.typescriptlang.org/'
    },
    {
        id: 3,
        name: 'HTML',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
        link: 'https://tailwindcss.com'
    },
    {
        id: 5,
        name: 'PostgreSQL',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
        link: 'https://www.postgresql.org/'
    },
    {
        id: 6,
        name: 'Node',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
        link: 'https://nodejs.org/en/'
    },
    {
        id: 7,
        name: 'Git',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
        link: 'https://git-scm.com'
    },
    {
        id: 1,
        name: 'Figma',
        img: 'https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png',
        link: 'https://www.figma.com/'
    }
]

function GuildGaming() {
    return(
        <div className='GuildGaming'>
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
                            <span>May 2023 - March 2024</span>
                            <span>San Marcos, Texas - Remote</span>
                        </div>
                    </div>
                </div>

                <ul className='searchspring__details'>
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

                </div>
        </div>
    )
}

export default GuildGaming