import { useEffect } from "react"

import MobileButton from "../../../app/MobileButton"
import Searchspring from "./Searchspring"
import GuildGaming from "./GuildGaming"
import Fullstack from "./Fullstack"



function Experience() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])

    return(
        <div className='page experience'>

            <MobileButton />

            <h2 className='page__title'>
                Experience
            </h2>

            <Searchspring />

            <GuildGaming />

            <Fullstack />

            <br />

        </div>
    )
}

export default Experience