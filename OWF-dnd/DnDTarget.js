/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: this wraps the display and hiding of the loader
 *
 *  Usage: var toc = new Toc( $("#containerDiv") );
 *----------------------------------------------------------------------------*/
DnDTarget = (function() {
    'use strict';

    function DnDTarget(domNode, widgetName, canDropCb, onDropCb) {

        if(!(this instanceof DnDTarget))
        {
            return new DnDTarget(args);
        }


        this._domNode = domNode;
        this._widgetName = widgetName;
        this._canDropCb = canDropCb;
        this._onDropCb = onDropCb;


    }

    return DnDTarget;
})();