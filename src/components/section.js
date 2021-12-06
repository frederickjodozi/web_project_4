export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(items) {
        items.forEach(this.addItem);
    }
    
    addItem = card => {
        const cardElement = this._renderer(card);
        this._container.prepend(cardElement);
    }
}
