import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CollectionProps = (props) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart({ id: props.id, name: props.name, price: props.price, img: props.img });
    };
    return (
        <>
            <div className="collection-child">
                <div className="collection-img">
                    <Link to={`/product/${props.id}`}><img src={props.img} alt="collection" /></Link>
                    <div className="quick-view-popup"><Link to={`/product/${props.id}`}>quick view</Link></div>
                </div>
                {props.isNew && <div className="collection-new-text">New</div>}
                {props.isOnSale && <div className="collection-sale-text">on Sale!</div>}
                <div className="collection-details">
                    <Link to={`/product/${props.id}`}><span className="collection-name">{props.name}</span></Link>
                    <span className="collection-price">{props.price}</span>
                    <div className="collection-shop-btn">
                        <p><Link to={`/product/${props.id}`} onClick={handleAddToCart}>add to cart</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionProps;