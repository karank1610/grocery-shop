import { Link } from "react-router-dom";

const NewProductProps = (props) => {
    return (
        <div className="new-product-child">
            <div className="new-product-img">
                <Link to={`/product/${props.id}`}>
                    <img src={props.img} alt="product" />
                </Link>
                <div className="quick-view-popup">
                    <Link to={`/product/${props.id}`}>quick view</Link>
                </div>
            </div>
            {props.isNew && <div className="new-product-new-text">New</div>}
            {props.isOnSale && <div className="new-product-sale-text">on Sale!</div>}
            <div className="new-product-details">
                <Link to={`/product/${props.id}`}>
                    <span className="new-product-name">{props.name}</span>
                </Link>
                <span className="new-product-price">{props.price}</span>
                <div className="new-product-shop-btn">
                    <p><Link to={`/product/${props.id}`}>add to cart</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NewProductProps;