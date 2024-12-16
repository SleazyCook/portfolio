import { Link } from 'react-router-dom'

const navArray = [
    {
        id: 1,
        name: "home",
        link: "/"
    },
    {
        id: 2,
        name: "experience",
        link: "experience"
    },
    {
        id: 3,
        name: "education",
        link: "education"
    },
    {
        id: 4,
        name:  "interests",
        link: "interests"
    }
]

function Navigation() {
    return(
        <div className="navigation">

        {navArray.map((navObj) => {
            return(
                <Link key={navObj.id} to={navObj.link}>
                    {navObj.name}
                </Link>
            )
        })}

        </div>
    )
}

export default Navigation