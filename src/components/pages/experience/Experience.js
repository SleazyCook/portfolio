import Resume from "./Resume"
import Searchspring from "./Searchspring"
import GuildGaming from "./GuildGaming"
import Fullstack from "./Fullstack"



function Experience() {

    return(
        <div className='page experience'>

            <Resume />

            <Searchspring />

            <GuildGaming />

            <Fullstack />

            <br />

        </div>
    )
}

export default Experience