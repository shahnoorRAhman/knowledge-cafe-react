import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(ress => ress.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mt-5 mb-5">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.ID}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;