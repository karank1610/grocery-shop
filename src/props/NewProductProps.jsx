const NewProductProps = (props) =>{
    return(
        <>
        <div className="new-product-child">
                <div className="new-product-img">
                    <a href=""><img src={props.img} alt="product" /></a>
                    <div className="quick-view-popup"><a href="">quick view</a></div>
                </div>
                {props.isNew && <div className="new-product-new-text">New</div>}
                {props.isOnSale && <div className="new-product-sale-text">on Sale!</div>}
                <div className="new-product-details">
                    <a href=""><span className="new-product-name">{props.name}</span></a>
                    <span className="new-product-price">{props.price}</span>
                    <div className="new-product-shop-btn">
                        <p><a href="">add to cart</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProductProps;