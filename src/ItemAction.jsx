import "./ItemAction.css";

function ItemAction({ id, deleteCallback }) {
    return (
        <div>
            <button className="ItemAction" onClick={() => {
                deleteCallback(id);
            }}>Delete</button>
        </div>
    )
}

export default ItemAction;