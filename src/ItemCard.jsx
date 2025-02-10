import "./ItemCard.css";

function ItemCard({ name, quantity, purpose }) {
    return (
        <div className="ItemCard">
            <h3>{name}</h3>
            <div className="ItemCard-quantity-purpose">Quantity: {quantity}</div>
            <div className="ItemCard-quantity-purpose">Purpose: {purpose}</div>
        </div>
    )
}

export default ItemCard;