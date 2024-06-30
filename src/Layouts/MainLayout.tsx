import React from 'react'

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar />
      <main className="main">
        <header id='header'>

        </header>
        <section id="aboutme">

        </section>
        <section id="contactme">

        </section>
      </main>
    </div>
  )
}

export default MainLayout