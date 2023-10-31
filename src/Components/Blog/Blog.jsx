import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { ID, Cover, Title, Author, Author_Image, Reading_Time, Posted_Date, Hashtag } = blog;
    return (
        <div className='mb-16 space-y-4'>
            <img className='mb-8 w-full' src={Cover} alt="" />

            <div className='flex justify-between items-center'>

                <div className='flex'>
                    <img className='w-14 ' src={Author_Image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div>
                </div>

                <div className='items-center'>
                    <span>{Reading_Time} min read</span>
                    <button className='ml-2' onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className='text-4xl mt-4'> {Title}</h2>
            <p>#{Hashtag}</p>
            <button className='text-purple-600 underline' onClick={() => handleMarkAsRead(ID, Reading_Time)} >Mark as read</button>
        </div>

    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;