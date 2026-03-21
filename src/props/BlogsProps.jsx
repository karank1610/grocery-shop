const BlogsProps = (props) => {
    return (
        <>
            <div className="latest-blog-child">
                <div className="blog-img">
                    <img src={props.img} alt="blog" />
                    <div className="blog-date">{props.date}</div>
                </div>
                <div className="blog-details">
                    <a href="/" className="blog-title"><span>{props.title}</span></a>
                    <p className="blog-description">{props.description}</p>
                    <a href="/" className="blog-read-more-btn">READ MORE</a>
                    {/* <div className="blog-read-more-btn">
                        <p><a href="">READ MORE</a></p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BlogsProps;