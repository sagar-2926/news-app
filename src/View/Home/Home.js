import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import NewsArticle from '../../Componant/NewsArticle/NewsArticle';
import Image from './newsapp.jpg'
function Home() {
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("pune")

    const loadNews = async () => {
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-07&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`);
            setNews(response.data.articles)
        }
       catch(error){
        console.log(error)
       }

    }

    const getNews = async () => {

    }

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(() => {
        loadNews()
    } , [searchQuery])

    return (
        <>
           
            <div>
               <div className="navbar">
                 <img src={Image} className='Navbar-image'/>
                  
                  <p className='navbar-heading'>World News</p>

               <input type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)
                    
                }  className='search-input'
                />

               </div>
                
                <div className="home-page">

                    {
                        news.map((newsArticle, index) => {
                            const { auther, title, description, published, url, publishedAt, urlToImage, articles } = newsArticle
                            return (<NewsArticle
                                auther={auther}
                                title={title}
                                description={description}
                                url={url}
                                publishedAt={publishedAt}
                                published={published}
                                urlToImage={urlToImage}
                                key={index}
                            />)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home

