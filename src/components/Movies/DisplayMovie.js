import React from 'react'

import styles from './Movie.module.css'

import { NavLink } from 'react-router-dom'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const DisplayMovie = (movies) => {
  const movie = movies.movies

  const Formatdate = (date) => {
    return format(parseISO(date), "dd'-'MMM'-'yyyy", {
      locale: ptBR
    })
  }

  return (
    <div>
      <section className={styles.movieContainer}>
          <h3>Top Critical Movies</h3>
          <div className={styles.movieRow}>
          {movie.length > 0 && movie.map((movie, key) => (
            <div key={key} className={styles.itemMovie}>
              <NavLink to={movie.link.url} target="_blank">
                <img src={movie.multimedia.src} alt="" />
                <h6 className={styles.dataAndSection}>
                  {movie.byline}
                  {movie.byline !== '' ? ' | ' : '' } 
                  {Formatdate(`${movie.publication_date}`)}
                </h6>
                <h4>{movie.display_title}</h4>
              </NavLink>
            </div>
          ))}
          </div>
      </section>
    </div>
  )
}

export default DisplayMovie