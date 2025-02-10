import ItemCard from "./ItemCard";
import "./InventoryDisplay.css";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventoryItems }) {
    return (
        <div>
            <h2>Inventory</h2>
            <div>
                <div className="InventoryDisplayItem">
                    <ItemCard name={"Oxygen Tank"} quantity={3} purpose={"Equipment"} />
                    <ItemAction />
                </div>
                <div className="InventoryDisplayItem">
                    <ItemCard name={"Oxygen Tank"} quantity={3} purpose={"Equipment"} />
                    <ItemAction />
                </div>
            </div>
        </div>
    )
}

export default InventoryDisplay;