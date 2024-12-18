import skills from '../../data/techSkills'

function Fullstack() {

    const fullstack = ['React.js', 'Javascript', 'HTML 5', 'CSS 3', 'Node.js', 'Git', 'Netlify', 'Render']

    const fullstackArray = skills.filter(skill => 
        fullstack.includes(skill.name)
    )

    return(
        <div className='fullstack experience__section'>

            <div className='fullstack__header'>
                <img src='https://i.imgur.com/dal0qO4.png' alt='Fullstack Academy logo' />
                <div className='fullstack__header--sub'>
                    <div className='job-title'>
                        Engineering Student
                    </div>
                    <div>
                        <span>Sept 2024 - Dec 2024</span>
                        <span>New York, NY - Remote</span>
                    </div>
                </div>
            </div>

            <ul className='experience__details'>
                <li>Full time 12-week immersive software engineering and web development bootcamp</li>
                <li>Weekly personal and group projects focused on JavaScript, React.js, Express.js, Node.js, and PostgreSQL</li>
                <li>Demonstrate full-stack web development skills and teamwork</li>
                <li>Capstone project: with a team of four students build a fully functional e-commerce web application from the ground up, deploy both front and back end services, present project in recorded presentation to graduate.</li>
            </ul>

            <div className='techstack'>
                <span>Tech Stack:</span>
                <div className='experience__skills-container'>
                    {fullstackArray.map((fullstackObj) => {
                        return(
                            <a className='skill-icon' href={fullstackObj.link}  key={fullstackObj.id} target='_blank'>
                                <img src={fullstackObj.img} alt={fullstackObj.name} style={{width: `${fullstackObj.width}px`}}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fullstack