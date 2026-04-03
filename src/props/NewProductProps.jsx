import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NewProductProps = (props) => {
    const {addToCart} = useCart();

    const handleAddToCart = (e)=>{
        e.preventDefault();
        addToCart({
            id:props.id,
            name: props.name,
            price: props.price,
            img: props.img,
        });
    }

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
                    <p><Link to={`/product/${props.id}`} onClick={handleAddToCart}>add to cart</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NewProductProps;