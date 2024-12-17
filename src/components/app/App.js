import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar.js'

import '../../styles/style.css'

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