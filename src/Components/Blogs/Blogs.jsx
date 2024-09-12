'use client'
import React, { useState, useEffect } from 'react';
import Styles from './Blogs.module.css'
const blogsData = [
  {
    id: 1,
    title: 'Introduction to React',
    author: 'John Doe',
    content: 'React is a JavaScript library for building user interfaces...',
    date: '2023-09-01',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    author: 'Jane Smith',
    content: 'JavaScript is a powerful language that lets you...',
    date: '2023-08-25',
  },
  {
    id: 3,
    title: 'Understanding APIs',
    author: 'Alice Johnson',
    content: 'APIs are a way for two computer programs to communicate...',
    date: '2023-07-15',
  },
];

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      setBlogs(blogsData);
    }, 1000);
  }, []);

  return (
    <div className={Styles.App}>
      <h1>Blogs Page</h1>
      <div className={Styles.blogscontainer}>
        {blogs.length ? (
          blogs.map((blog) => <div className={Styles.blogcard}>
          <h2>{blog.title}</h2>
          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
          <p>{blog.content}</p>
        </div>)
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </div>
  );
}

export default App;
