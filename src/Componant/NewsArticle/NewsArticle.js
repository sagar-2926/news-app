import React from 'react'
import './NewsArticle.css';
function NewsArticle({ auther, title, description, published, url, publishedAt, urlToImage, articles }) {
    return (
        <div className='news-article-card'>
            <img src={urlToImage} className='news-article-img' />
            <p className='article-title'>{title}</p>
              <div>
              <p className='article-auther'>{auther}</p>
              <p className='article-publishAt'>{publishedAt}</p>
               <p className='article-description'>{description}</p>
              </div>

             < a href={url} target='_blank' className='btn-readmore'>...Read more</a>
        </div>
    )
}

export default NewsArticle