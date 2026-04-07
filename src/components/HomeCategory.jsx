import { useState } from "react";
import CategoryProps from "../props/CategoryProps";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCategory = () => {
    const categories = [
        {
            id: 1,
            img: '/assets/img/category1.jpg',
            name: 'vegetables',
        },
        {
            id: 2,
            img: '/assets/img/category2.jpg',
            name: 'energy',
        },
        {
            id: 3,
            img: '/assets/img/category3.jpg',
            name: 'tea',
        },
        {
            id: 4,
            img: '/assets/img/category4.jpg',
            name: 'fruits',
        },
        {
            id: 5,
            img: '/assets/img/category5.jpg',
            name: 'dairy',
        },
        {
            id: 6,
            img: '/assets/img/category6.jpg',
            name: 'mask',
        },
        {
            id: 7,
            img: '/assets/img/category7.jpg',
            name: 'oil',
        },
        {
            id: 8,
            img: '/assets/img/category8.jpg',
            name: 'beverages',
        },

    ]
    const [categoriesList, setCategoriesList] = useState(categories);

    const next = () => {
        setCategoriesList(prev => {
            const newArr = [...prev];
            const last = newArr.pop();
            newArr.unshift(last);
            return newArr;
        });
    };
    const prev = () => {
        setCategoriesList(prev => {
            const newArr = [...prev];
            const first = newArr.shift();
            newArr.push(first);
            return newArr;
        });
    };
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
                    <IoIosArrowBack className="category-arrow-left" onClick={prev} />
                    <div className="category-child-main">
                        {/* <CategoryProps img={category.img} name={category.name} /> */}
                        {
                            categoriesList.map(category => (
                                <CategoryProps key={category.id} {...category} />
                            ))
                        }
                    </div>
                    <IoIosArrowForward className="category-arrow-right" onClick={next} />
                </div>
            </div>
        </>
    )
}

export default HomeCategory;