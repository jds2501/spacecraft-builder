import ItemCard from "./ItemCard";
import "./InventoryDisplay.css";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventoryItems, deleteItemCallback }) {
    return (
        <div>
            <h2>Inventory</h2>
            <div>
                {inventoryItems.map(({ id, name, quantity, purpose }) => {
                    return (
                        <div key={id} className="InventoryDisplayItem">
                            <ItemCard name={name} quantity={quantity} purpose={purpose} />
                            <ItemAction />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InventoryDisplay;