import React from "react";
import CollectionProps from "../props/CollectionProps.";

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
                    <CollectionProps img={'assets/img/collection1.jpg'} name={'perspiciatis unde'} price={'$99.00'} isNew={true} isOnSale={true}/>
                    <CollectionProps img={'assets/img/collection2.jpg'} name={'omnis iste'} price={'$199.00'} isNew={true} isOnSale={false}/>
                    <CollectionProps img={'assets/img/collection3.jpg'} name={'accusantium dolore'} price={'$299.00'} isNew={true} isOnSale={true}/>
                    <CollectionProps img={'assets/img/collection4.jpg'} name={'rem aperiam'} price={'$249.00'} isNew={false} isOnSale={true}/>
                    <CollectionProps img={'assets/img/collection5.jpg'} name={'adipisci velit'} price={'$269.00'} isNew={true} isOnSale={true}/>
                    <CollectionProps img={'assets/img/collection6.jpg'} name={'numquam eius'} price={'$169.00'} isNew={true} isOnSale={false}/>
                    <CollectionProps img={'assets/img/collection7.jpg'} name={'modi tempora'} price={'$79.00'} isNew={true} isOnSale={true}/>
                    <CollectionProps img={'assets/img/collection8.jpg'} name={'dolore magnam'} price={'$229.00'} isNew={false} isOnSale={false}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Collection;