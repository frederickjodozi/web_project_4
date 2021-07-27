class Section{
    constructor({data, renderer}, cardSelector){
        this._renderedItems = data;
        this._renderer = renderer;

        this._container = cardSelector;
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item));
    }
    
    setItem(element) {
        this._container.append(element);
    }
}
