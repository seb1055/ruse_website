import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import {getAllBlogs} from '../../api/blogsApi';
import style from './Blog.module.css'


const Blog = () => {

  // store the blogs from the api in blogs
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    getAllBlogs()
      .then(res => {
        res.data.sort((a, b) => {
          return  convertStringToDate(b.datePosted) - convertStringToDate(a.datePosted) 
        })
        setBlogs(res.data)
      })
  }, []);


  // DATE FORMAT IS MM/DD/YYYY
  const convertStringToDate = (dateString) => {
    const date  = dateString.split('-')
    return new Date(date[2], date[0], date[1])
  }

  return (
    <div className={style.center}>

      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Ruse.tech blog posts."/>
        <meta name="keywords" content="hacking, blog, security, cloud, pentesting"/>
        <link rel="canonical" href="http://ruse.tech/blogs" />
      </Helmet>
  
      <ul className={style.root}>

        {blogs.map((blog, index) => {
          return( 
                <div className={style.linkContainer}> 
                  <Link key={index} to={`blogs/${blog.id}`}> <li className={style.link}>{blog.title}</li></Link>
                  <p className={style.postDate}>Date: {blog.datePosted}</p>
                  <p>Tags: {blog.tags.join(', ')}</p>
                </div>
          ) 
        })}
        
      </ul>
    </div>
  )
}

export default Blog;
