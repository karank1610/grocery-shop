import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const banners = [
    {
        id: 1,
        img: "/assets/img/banner-1.jpg",
        label: "On Grocery",
        highlight: "20",
        prefix: "Flat",
        suffix: "% Off",
        sub: "Min. $200 Purchase. Save Today!!",
        btnText: "shop today",
    },
    {
        id: 2,
        img: "/assets/img/banner-1.jpg",
        label: "On Fashion",
        highlight: "30",
        prefix: "Upto",
        suffix: "% Off",
        sub: "Min. $150 Purchase. Limited Time!!",
        btnText: "shop now",
    },
    {
        id: 3,
        img: "/assets/img/banner-1.jpg",
        label: "On Fashion",
        highlight: "40",
        prefix: "Upto",
        suffix: "% Off",
        sub: "Min. $150 Purchase. Limited Time!!",
        btnText: "shop now",
    },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => (i === 0 ? banners.length - 1 : i - 1));
    const next = () => setCurrent(i => (i === banners.length - 1 ? 0 : i + 1));

    const banner = banners[current];

    return (
        <div className="banner-main">
            <IoIosArrowBack className="banner-arrow-left" onClick={prev} />

            <div className="static-banner-1">
                <div className="banner-img">
                    <a href="/"><img src={banner.img} alt="banner" /></a>
                </div>
                <div className="banner-text">
                    <p>
                        <span>
                            {banner.prefix} <strong>{banner.highlight}</strong>{banner.suffix}
                            <br />{banner.label}
                        </span>
                        <br />{banner.sub}
                    </p>
                </div>
                <div className="banner-shop-button">
                    <p><a href="/">{banner.btnText}</a></p>
                </div>
            </div>

            <IoIosArrowForward className="banner-arrow-right" onClick={next} />

            <div className="banner-dots">
                {banners.map((_, i) => (
                    <span
                        key={i}
                        className={`banner-dot ${i === current ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;