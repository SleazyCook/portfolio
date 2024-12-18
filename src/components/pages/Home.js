import Name from "../components/Name"
import Skills from "../components/Skills"
import Quote from "../components/Quote"

function Home() {
    return (
        <div className='page home'>

            <Name />
            
            {/* Include skills - see github */}
            <Skills />

            {/* Include QUOTES api */}
            <Quote />

            </div>
    )
}

export default Home