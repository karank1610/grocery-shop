import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogsProps from "../props/BlogsProps";
import { useState } from "react";

const Blogs = () => {
    const blogs = [
        {
            img: "assets/img/blog-1.png",
            title: "Consectetur, adipisci velit, sed quia non numquam eius modi.",
            description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
            date: "July 30, 2020"
        },
        {
            img: "assets/img/blog-2.png",
            title: "Ut labore et dolore magnam aliquam quaerat voluptatem.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            date: "July 10, 2020"
        },
        {
            img: "assets/img/blog-3.png",
            title: "Neque porro quisquam est qui dolorem ipsum.",
            description:
                "Duis aute irure dolor in reprehenderit.",
            date: "July 21, 2020"
        },
        {
            img: "assets/img/blog-4.png",
            title: "Ut labore et dolore magnam aliquam quaerat voluptatem.",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            date: "July 21, 2020"
        }
    ];

    const [start, setStart] = useState(0);

    const next = () => {
        if (start < blogs.length - 3) {
            setStart(start + 1);
        }
    };

    const prev = () => {
        if (start > 0) {
            setStart(start - 1);
        }
    };
    return (
        <>
            <div className="latest-blog-heading-main">
                <div className="container">
                    <div className="latest-blog-heading-child">
                        <span>Latest <i>Blogs</i></span>
                    </div>
                </div>
            </div>
            <div className="latest-blog-main">
                <div className="container">

                    <div className="latest-blog-child-main">
                        <IoIosArrowBack className="blog-arrow-left" onClick={prev} />
                        <div className="blog-viewport">
                            <div className="blog-slider" style={{ transform: `translateX(-${start * 33.33}%)` }}>
                                {blogs.map((blog, i) => (
                                    <BlogsProps key={i} {...blog} />
                                ))}
                            </div>
                        </div>
                        <IoIosArrowForward className="blog-arrow-right" onClick={next} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs;