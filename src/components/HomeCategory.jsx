import CategoryProps from "../props/CategoryProps";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCategory = () => {
    return (
        <>
            <div className="category-heading-main">
                <div className="container">
                    <div className="category-heading-child">
                        <span>shop by category</span>
                    </div>
                </div>
            </div>
            <div className="category-main">
                <div className="container">
                    <IoIosArrowBack className="category-arrow-left" />
                    <div className="category-child-main">
                        <CategoryProps img={'assets/img/category1.jpg'} name={'vegetables'} />
                        <CategoryProps img={'assets/img/category2.jpg'} name={'energy'} />
                        <CategoryProps img={'assets/img/category3.jpg'} name={'tea'} />
                        <CategoryProps img={'assets/img/category4.jpg'} name={'fruits'} />
                        <CategoryProps img={'assets/img/category5.jpg'} name={'dairy'} />
                        <CategoryProps img={'assets/img/category6.jpg'} name={'mask'} />
                        <CategoryProps img={'assets/img/category7.jpg'} name={'oil'} />
                        <CategoryProps img={'assets/img/category8.jpg'} name={'beverages'} />
                    </div>
                    <IoIosArrowForward className="category-arrow-right" />
                </div>
            </div>
        </>
    )
}

export default HomeCategory;