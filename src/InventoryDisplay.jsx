import ItemCard from "./ItemCard";
import "./InventoryDisplay.css";

function InventoryDisplay({ inventoryItems }) {
    return (
        <div>
            <h2>Inventory</h2>
            <div className="InventoryDisplay">
                <ItemCard name={"Oxygen Tank"} quantity={3} purpose={"Equipment"} />
            </div>
        </div>
    )
}

export default InventoryDisplay;