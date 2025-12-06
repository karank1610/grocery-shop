import React from "react";

const CategoryProps = (props) => {
    return (
        <>
            <div className="category-child">
                <div className="category-img">
                    <a href=""><img src={props.img} alt="category" /></a>
                </div>
                <div className="category-name">
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    )
}

export default CategoryProps;