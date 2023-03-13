import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  
  const data = new Date()

  const newData = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric'}).format(data)

  return (
    <nav className={styles.menu}>
      <div className={styles.languageAndData}>
        <ul>
          <li className={styles.language}><NavLink>U.S</NavLink></li>
          <li><NavLink>INTERNATIONAL</NavLink></li>
          <li>|</li>
          <li>{newData}</li>
        </ul>
      </div>
      <div>
        <NavLink><h1>Newspaper</h1></NavLink>
      </div>
      <div className={styles.listMenu}>
        <ul>
          <li><NavLink>World</NavLink></li>
          <li><NavLink>U.S.</NavLink></li>
          <li><NavLink>Politics</NavLink></li>
          <li><NavLink>N.Y.</NavLink></li>
          <li><NavLink>Business</NavLink></li>
          <li><NavLink>Opinion</NavLink></li>
          <li><NavLink>Science</NavLink></li>
          <li><NavLink>Health</NavLink></li>
          <li><NavLink>Sports</NavLink></li>
          <li><NavLink>Arts</NavLink></li>
          <li><NavLink>Books</NavLink></li>
          <li><NavLink>Style</NavLink></li>
          <li><NavLink>Food </NavLink></li>
          <li><NavLink>Travel </NavLink></li>
          <li><NavLink>Magazine</NavLink></li>
          <li><NavLink>Real Estate</NavLink></li>
          <li>|</li>
          <li><NavLink><i className="bi bi-search"></i></NavLink></li>
        </ul>
      </div>
      <div className={styles.listMobile}>
        <ul>
          <li><NavLink>World</NavLink></li>
          <li><NavLink>U.S.</NavLink></li>
          <li><NavLink>Politics</NavLink></li>
          <li><NavLink>N.Y.</NavLink></li>
          <li><NavLink>Business</NavLink></li>
          <li>|</li>
          <li><NavLink><i className="bi bi-search"></i></NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header