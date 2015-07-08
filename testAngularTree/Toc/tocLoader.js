
function TocLoader(domNode) {

    this._domNode = domNode;

    console.debug("TocLoader ctor this._domNode ", domNode);

    this.show = function(text) {
        this._domNode.isLoading({
            text:       text,
            position:   "overlay"
        });
    }

    this.hide = function() {
        this._domNode.isLoading( "hide" );
    }
}