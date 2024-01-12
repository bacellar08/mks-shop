

const Quantity = () => {

    return (
        <div className="input-group quantity-selector">
        <input type="number" id="inputQuantitySelector" className="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"/>
        <button type="button" className="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
        <span className="visually-hidden">Step down</span>
        </button>
        <button type="button" className="btn btn-icon btn-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
        <span className="visually-hidden">Step up</span>
        </button>
        </div>
    )
}


export default Quantity