import InventoryDisplay from "./InventoryDisplay";

import ItemForm from "./ItemForm";
import "./SpacecraftBuilder.css";
import { useState } from 'react';

function SpacecraftBuilder() {
    const [inventoryItems, setInventoryItems] = useState([]);

    function addItem(item) {
        setInventoryItems(inventoryItems => {
            return [...inventoryItems, item];
        })
    }

    function deleteItem(id) {
        setInventoryItems(inventoryItems => {
            return inventoryItems.filter((inventoryItem) => {
                return inventoryItem.id !== id;
            });
        });
    }

    return (
        <div className="SpacecraftBuilder">
            <h1>Spacecraft Builder</h1>
            <ItemForm addItemCallback={addItem} />
            <InventoryDisplay inventoryItems={inventoryItems} deleteItemCallback={deleteItem} />
        </div>
    )
}

export default SpacecraftBuilder;