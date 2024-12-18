import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar.js'

import '../../styles/app/app.css'
import '../../styles/app/sidebar.css'
import '../../styles/pages/home.css'
import '../../styles/pages/experience.css'

function App() {
    return (
        <div className='app'>

            <div className='app__content'>

                <Sidebar />

                <Outlet context />

            </div>

        </div>
    )
}

export default App