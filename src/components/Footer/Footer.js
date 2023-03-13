import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <NavLink to=''><h1>Newspaper</h1></NavLink>
      </div>
      <div className={styles.listLinks}>
        <div className={styles.displayMobile}>
          <h4>News</h4>
          <ul>
            <li>
              <NavLink to="">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="">World</NavLink>
            </li>
            <li>
              <NavLink to="">Coronavirus</NavLink>
            </li>
            <li>
              <NavLink to="">U.S.</NavLink>
            </li>
            <li>
              <NavLink to="">Politics</NavLink>
            </li>
            <li>
              <NavLink to="">Politics</NavLink>
            </li>
            <li>
              <NavLink to="">Politics</NavLink>
            </li>
            <li>
              <NavLink to="">Politics</NavLink>
            </li>
            <li>
              <NavLink to="">Politics</NavLink>
            </li>
            <li>
              <NavLink to="">New York</NavLink>
            </li>
            <li>
              <NavLink to="">Business</NavLink>
            </li>
            <li>
              <NavLink to="">Tech</NavLink>
            </li>
            <li>
              <NavLink to="">Science</NavLink>
            </li>
            <li>
              <NavLink to="">Sports</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.displayMobile}>
          <h4>Opinion</h4>
          <ul>
            <li>
              <NavLink to="">Today's Opinion</NavLink>
            </li>
            <li>
              <NavLink to="">Columnists</NavLink>
            </li>
            <li>
              <NavLink to="">Editorials</NavLink>
            </li>
            <li>
              <NavLink to="">Guest Essays</NavLink>
            </li>
            <li>
              <NavLink to="">Sunday Opinion</NavLink>
            </li>
            <li>
              <NavLink to="">Opinion Video</NavLink>
            </li> 
          </ul>
        </div>
        <div className={styles.displayMobile}>
          <h4>Arts</h4>
          <ul>
            <li>
              <NavLink to="">Today's Arts</NavLink>
            </li>
            <li>
              <NavLink to="">Art & Design</NavLink>
            </li>
            <li>
              <NavLink to="">Books</NavLink>
            </li>
            <li>
              <NavLink to="">Best Sellers Book List</NavLink>
            </li>
            <li>
              <NavLink to="">Dance</NavLink>
            </li>
            <li>
              <NavLink to="">Movies</NavLink>
            </li>
            <li>
              <NavLink to="">Music</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.displayMobile}>
          <h4>Living</h4>
          <ul>
            <li>
              <NavLink to="">Automotive</NavLink>
            </li>
            <li>
              <NavLink to="">Games</NavLink>
            </li>
            <li>
              <NavLink to="">Education</NavLink>
            </li>
            <li>
              <NavLink to="">Food</NavLink>
            </li>
            <li>
              <NavLink to="">Health</NavLink>
            </li>
            <li>
              <NavLink to="">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="">Love</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            <li>
              <NavLink to="">Reader Center</NavLink>
            </li>
            <li>
              <NavLink to="">The Athletic</NavLink>
            </li>
            <li>
              <NavLink to="">Wirecutter</NavLink>
            </li>
            <li>
              <NavLink to="">Cooking</NavLink>
            </li>
            <li>
              <NavLink to="">Headway</NavLink>
            </li>
            <li>
              <NavLink to="">Live Events</NavLink>
            </li>
            <li>
              <NavLink to="">Headway</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4>Subscribe</h4>
          <ul>
            <li>
              <NavLink to="">
                <h3>
                  <i className="bi bi-newspaper"></i> Home Delivery
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <h3>
                  <i className="bi bi-person-up"></i> Digital Subscriptions
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <h3>
                  <i className="bi bi-controller"></i> Games
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <h3>
                  <i className="bi bi-gear"></i> Cooking
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="">Email Newsletters</NavLink>
            </li>
            <li>
              <NavLink to="">Corporate Subscriptions</NavLink>
            </li>
            <li>
              <NavLink to="">Education Rate</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <h5>&copy; 2023 Newspaper. Todos os Direitos Reservados</h5>
      </div>
    </footer>
  )
}

export default Footer