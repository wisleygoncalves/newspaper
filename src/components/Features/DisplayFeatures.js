import React from 'react'

import styles from './Features.module.css'

import { NavLink } from 'react-router-dom'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const DisplayFeatures = (mainArticles) => {

  const articles = mainArticles.mainArticles
  const popular = mainArticles.mostPopular
  const Formatdate = (date) => {
    return format(parseISO(date), "dd'-'MMM'-'yyyy", {
      locale: ptBR
    })
  }

  return (
    <div>
      <div className={styles.containerFeature}>
        <section className={styles.boxFeature}>
          <div className={styles.rowFeatures}>
            {articles && articles.map((item, key) => (
              <div key={key} className={styles.itemArticle}>
                <NavLink to={item.webUrl} target="_blank">
                  <img src={item.fields.thumbnail !== '' ? `${item.fields.thumbnail}` : 'https://lcipp.unfccc.int/sites/default/files/styles/carousel_item/public/2021-03/LCIPP%20Family%20Photo.png?itok=JmSpKeeO'} alt="" crossOrigin />
                  <h3>{item.fields.headline}</h3>
                  <h6 className='category'>
                    {item.pillarName}
                    {item.pillarName !== null ? ' | ' : ''}
                    {item.sectionName}
                  </h6>
                  <h6 className='author'>
                    {item.fields.byline}
                    {item.fields.byline !== null ? ' | ' : ''}
                    {Formatdate(`${item.webPublicationDate}`)}
                  </h6>
                  <p>
                    {item.fields.bodyText}
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.boxMostPopular}>
          <div>
            {popular && popular.map((list, key) => (
              <div key={key} className={styles.itemMostPopular}>
                <NavLink to={list.url} target='_blank'>
                  <h4>{list.title}</h4>
                  <h6 className={styles.dataAndSection}>
                    {list.section}
                    {list.section !== '' ? ' | ' : ''}
                    {Formatdate(`${list.updated}`)}
                  </h6>
                  <p className={styles.description}>{list.abstract}</p>
                </NavLink>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default DisplayFeatures