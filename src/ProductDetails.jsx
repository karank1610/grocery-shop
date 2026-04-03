import { useParams, Link } from "react-router-dom";
import products from './data/products';
import { useEffect } from "react";

const ProductDetails = () => {

    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));

    useEffect(()=>{
                window.scrollTo(0,0);
                document.title = "Product Details";
            },[])

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="product-detail-main">
            <div className="container">
                <div className="product-detail-child">
                    <div className="product-detail-img">
                        <img src={product.img} alt={product.name} />
                        {product.isNew && <span className="badge-new">New</span>}
                        {product.isOnSale && <span className="badge-sale">On Sale!</span>}
                    </div>
                    <div className="product-detail-info">
                        <h1>{product.name}</h1>
                        <span className="product-detail-price">{product.price}</span>

                        <p className="product-detail-description">{product.description}</p>

                        <ul className="product-detail-features">
                            {product.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>

                        <div className="product-detail-meta">
                            <div className="product-detail-meta-row">
                                <span className="meta-label">Category</span>
                                <span className="meta-value">{product.category}</span>
                            </div>
                            <div className="product-detail-meta-row">
                                <span className="meta-label">Availability</span>
                                <span className="meta-value meta-stock">In Stock</span>
                            </div>
                            <div className="product-detail-meta-row">
                                <span className="meta-label">SKU</span>
                                <span className="meta-value">#{String(product.id).padStart(4, '0')}</span>
                            </div>
                        </div>

                        <button className="add-to-cart-btn">Add to Cart</button>
                        <Link to="/" className="back-link">← Back to products</Link>
                    </div>
                </div>

                {/* Long Description Section */}
                <div className="product-detail-long-desc">
                    <h2>Product Description</h2>
                    <p>{product.longDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;