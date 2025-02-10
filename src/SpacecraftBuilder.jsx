import InventoryDisplay from "./InventoryDisplay";

import ItemForm from "./ItemForm";
import "./SpacecraftBuilder.css";

function SpacecraftBuilder() {

    function addItem(item) {
        console.log(item);
    }

    return (
        <div className="SpacecraftBuilder">
            <h1>Spacecraft Builder</h1>
            <ItemForm addItemCallback={addItem} />
            <InventoryDisplay />
        </div>
    )
}

export default SpacecraftBuilder;