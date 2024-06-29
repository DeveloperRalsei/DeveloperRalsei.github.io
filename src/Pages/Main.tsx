import React from 'react'

const Main: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <a href="/" className="navbar-brand">Developer Ralsei</a>
          <ul className="nav-links">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#aboutme">About Me</a></li>
            <li className="nav-item"><a href="#contactme">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Main