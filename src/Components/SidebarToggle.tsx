import React, { useEffect, useState } from 'react'

import '../Styles/sidebarToggle.css'

const SidebarToggle: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.querySelector(".toggle-sidebar")

    if (sidebar) {
      if (isActive) {
        sidebar.classList.add("active");
        sidebarToggle?.classList.add("fa-xmark")
        sidebarToggle?.classList.remove("fa-bars");
      } else {
        sidebarToggle?.classList.add("fa-bars");
        sidebarToggle?.classList.remove("fa-xmark")
        sidebar.classList.remove("active");
      }
    }
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <i className="fa fa-bars toggle-sidebar" onClick={handleToggle}></i>
  )
}

export default SidebarToggle