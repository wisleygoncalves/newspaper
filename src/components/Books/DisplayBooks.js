import React from 'react'

import styles from './DisplayBooks.module.css'

import { NavLink } from 'react-router-dom'

const DisplayBooks = (books) => {
  
  const book = books.books
  
  return (
    <section>
      <div className={styles.containerBook}>
        <div className={styles.itemsBooks}>
          {book.length > 0 && book.map((book, key) => (
            <div key={key} className={styles.books}>
              <div>
                <NavLink to={book.amazon_product_url} target="_blank">
                  <h4>{book.title}</h4>
                  <h6 className={styles.authorBook}>
                    {book.author}
                  </h6>
                  <p>{book.description}</p>
                </NavLink>
              </div>
              <div>
                <NavLink to={book.amazon_product_url} target="_blank">
                  <img src={book.book_image} alt="" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DisplayBooks