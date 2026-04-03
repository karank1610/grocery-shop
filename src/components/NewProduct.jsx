import products from '../data/products';
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
                        {products.map(product => (
                            <NewProductProps key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewProduct;