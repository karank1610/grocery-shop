import React from "react";

const CollectionProps = (props) => {
    return (
        <>
        <div className="collection-child">
                        <div className="collection-img">
                            <a href=""><img src={props.img} alt="collection" /></a>
                        </div>
                        <div className="collection-details">
                            <a href=""><span className="collection-name">{props.name}</span></a>
                            <span className="collection-price">{props.price}</span>
                            <div className="collection-shop-btn">
                                <p><a href="">add to cart</a></p>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default CollectionProps;