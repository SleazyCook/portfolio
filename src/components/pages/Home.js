import Name from "../components/Name"
import Skills from "../components/Skills"

function Home() {
    return (
        <div className='page home'>

            <Name />
            
            {/* Include QUOTES api */}

            {/* Include skills - see github */}
            <Skills />

            </div>
    )
}

export default Home