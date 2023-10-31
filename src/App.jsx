import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)

  }

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = (ID, time) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.ID !== ID);
    setBookmarks(remainingBookmarks)

  }

  return (
    <div>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App
