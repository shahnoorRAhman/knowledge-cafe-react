import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:1/3 mt-5">
            <div>
                <h3 className="text-3xl bg-slate-900 text-white font-bold text-center p-5">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;