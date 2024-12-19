import Resume from "./Resume"
import Searchspring from "./Searchspring"
import GuildGaming from "./GuildGaming"
import Fullstack from "./Fullstack"



function Experience() {

    return(
        <div className='page experience'>

            <h2 className='page__title'>
                Experience
            </h2>

            <Resume />

            <Searchspring />

            <GuildGaming />

            <Fullstack />

            <br />

        </div>
    )
}

export default Experience