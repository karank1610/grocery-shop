import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    return (
        <>
            <div className="banner-main">
                <IoIosArrowBack className="banner-arrow-left" />
                <div className="static-banner-1">
                    <div className="banner-img">
                        <a href=""><img src="assets/img/banner-1.jpg" alt="banner" /></a>
                    </div>
                    <div className="banner-text">
                        <p> <span>Flat <strong>20</strong>% Off <br /> On Grocery </span><br /> Min. $200 Purchase. <br /> Save Today!!</p>
                    </div>
                    <div className="banner-shop-button">
                        <p><a href="">shop today</a></p>
                    </div>
                </div>
                <IoIosArrowForward className="banner-arrow-right" />
            </div>
        </>
    )

}

export default Banner;