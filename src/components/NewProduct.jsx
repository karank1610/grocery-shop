import React from "react";
import NewProductProps from "../props/NewProductProps";

const NewProduct = () => {
    return (
        <>
            <div className="new-product-heading-main">
                <div className="container">
                    <div className="new-product-heading-child">
                        <span>new <i>products</i></span>
                    </div>
                </div>
            </div>
            <div className="new-product-main">
                <div className="container">
                    <div className="new-product-child-main">
                        <NewProductProps img={'assets/img/collection5.jpg'} name={'perspiciatis unde'} price={'$99.00'} isNew={true} isOnSale={true} />
                        <NewProductProps img={'assets/img/collection2.jpg'} name={'omnis iste'} price={'$199.00'} isNew={true} isOnSale={false} />
                        <NewProductProps img={'assets/img/collection4.jpg'} name={'accusantium dolore'} price={'$299.00'} isNew={true} isOnSale={true} />
                        <NewProductProps img={'assets/img/collection7.jpg'} name={'rem aperiam'} price={'$249.00'} isNew={false} isOnSale={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct;