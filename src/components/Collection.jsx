import React from "react";
import CollectionProps from "../props/CollectionProps.";
import collections from "../data/collections";

const Collection = () => {
    return (
        <>
        <div className="collection-heading-main">
            <div className="container">
                <div className="collection-heading-child">
                    <span>featured <i>collection</i></span>
                </div>
            </div>
        </div>
        <div className="collection-main">
            <div className="container">
                <div className="collection-child-main">
                    {/* <div className="collection-child">
                        <div className="collection-img">
                            <a href=""><img src="assets/img/collection1.jpg" alt="collection" /></a>
                        </div>
                        <div className="collection-details">
                            <span>abc</span>
                            <span>$20</span>
                            <div className="collection-shop-btn">
                                <p><a href="">shop today</a></p>
                            </div>
                        </div>
                    </div> */}
                    {collections.map(collections => (
                            <CollectionProps key={collections.id} {...collections} />
                        ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Collection;