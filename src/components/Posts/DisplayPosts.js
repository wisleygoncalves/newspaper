import React from 'react'

import { NavLink } from 'react-router-dom'

// CSS
import styles from './Posts.module.css'

// Function Data
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const DisplayPosts = (title) => {
  const titleNews = title.title
  const list = title.items.response.results
  console.log(list)

  const Formatdate = (date) => {
    return format(parseISO(date), "dd'-'MMM'-'yyyy", {
      locale: ptBR
    })
  }
  
  return (
    <div>
       <section className={styles.articleContainer}>
        <h3>{titleNews}</h3>
        <div className={styles.articleBox}>
          {list && list.map((post, key) => (
            <div key={key} className={styles.articleCard}>
              <NavLink to={post.webUrl} target="_blank">
              <img src={post.fields.thumbnail !== ''  ? `${post.fields.thumbnail}` : 'https://lcipp.unfccc.int/sites/default/files/styles/carousel_item/public/2021-03/LCIPP%20Family%20Photo.png?itok=JmSpKeeO'} alt="" crossorigin/>
              <h4>
                {post.fields.headline}
              </h4>
              <h6 className='author'>
                {post.fields.byline}
                {!post.fields.byline ? '' : ' | '}
                {Formatdate(`${post.webPublicationDate}`)}
              </h6>
              <p>{post.fields.bodyText}</p>
              <p>{!post.fields.bodyText ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit convallis, pulvinar nunc eget, aliquet ligula. Praesent sem sem, congue a tortor quis, consectetur congue tellus. Proin eu metus pulvinar, vestibulum lorem nec, pellentesque risus. Morbi rhoncus turpis a eros tincidunt, vehicula iaculis nunc dapibus. Nullam pellentesque lacus sed scelerisque condimentum. Etiam tristique, ipsum ac ornare dignissim, libero lacus iaculis justo, sed pulvinar tellus lectus sed sapien.' : ''}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DisplayPosts