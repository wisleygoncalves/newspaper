import React, {useEffect, useState} from 'react'

// CSS
import styles from './Home.module.css'

// APIS
import FetchPosts from '../../FetchPosts'

// components
import DisplayMovie from '../../components/Movies/DisplayMovie'
import DisplayPosts from '../../components/Posts/DisplayPosts'
import DisplayBooks from '../../components/Books/DisplayBooks'
import DisplayFeatures from '../../components/Features/DisplayFeatures'

const Home = () => {

  const [books, setBook] = useState([])
  const [posts, setPosts] = useState([])
  const [movies, setMovies] = useState([])
  const [mainArticles, setMainArticles]  = useState([])
  const [mostPopular, setMostPopular] = useState([])
  const [features, setFeatures] = useState([])

  useEffect(() => {
    const loadBooks = async () => {
      const book = await FetchPosts.getBooks()
      setBook(book[0].items.results.books)
    }
    loadBooks()
  }, [])
  useEffect(() => {
    const loadPosts = async () => {
      const post = await FetchPosts.getPost()
      setPosts(post)
    }
    loadPosts()
  }, [])
  useEffect(() => {
    const loadMovies = async () => {
      const movie = await FetchPosts.getMovie()
      setMovies(movie[0].items.results)
    }
    loadMovies()
  }, [])

  useEffect(() => {
    const loadFeatures = async () => {
      const feature = await FetchPosts.getFeature()
      setFeatures(feature)
      setMainArticles(feature[0].items.response.results)
      setMostPopular(feature[1].items.results)
    }
    loadFeatures()
  }, [])

  return (
    <div> 
      <div> 
        {features && 
          <DisplayFeatures
            mainArticles={mainArticles}
            mostPopular={mostPopular}
          />
        }
        {books &&
           <DisplayBooks
            books={books} 
           />
        }
        {movies &&
          <DisplayMovie
            movies={movies}
          />
        }
        {posts.map((post, key) => (
          <DisplayPosts
          key={key}
          // posts={post}
          title={post.title}
          items={post.items}/>
        )) 
        }
        
        </div>
        {features.length <= 0 &&
          <div className={styles.loading}>
            <img src="https://i.pinimg.com/originals/bc/56/b3/bc56b31a50e519be2ed335a47e75bc62.gif" alt="" />
          </div>
        }
    </div>
  )
}

export default Home