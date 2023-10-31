
const Bookmark = ({ bookmark }) => {
    const { Title } = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{Title}</h3>
        </div>
    );
};

export default Bookmark;