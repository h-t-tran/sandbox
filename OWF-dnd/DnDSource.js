/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: the drag and drop source.  This wraps the OWF DnD to make it easier
 * to unit test the client code.
 *
 *  Usage:
 *   var dndsrc = new DnDSource("alarmwidget");
 *   dndsrc.startDrag("AlarmType", [1,2], function(targetWidgetName, arrayOfDataDropped){
 *          // your custom handler when an array of data is dropped on the target widget.
 *      }, function() {
 *          // custom handler when the DnD operation is canceled.
 *      });
 *----------------------------------------------------------------------------*/
DnDSource = (function() {
    'use strict';

    function DnDSource(widgetName) {

        if(!(this instanceof DnDSource))
        {
            return new DnDSource(args);
        }

        this._widgetName = widgetName;
        this._onDroppedCb = null;
        this._onCancelCb = null;

        var self = this;

        // the src don't need to know when DnD starts
        //OWF.DragAndDrop.onDragStart(function() { });

        // the onDragStop is called whenever the user drops the data anywhere
        // on either the src or the target widget.  It will be called regardless if
        // the target widget accepts the data or not.
        OWF.DragAndDrop.onDragStop(function () {

            // since we are relying on the target widget to send back a response via
            // IWC indicating it either accepts or rejects the DnD data.
            // For the case when there is no target widget and the user drops the DnD data
            // on the src widget, then we need to rely on this onDragStop() callback to
            // invoked the this._onCancelCb().
            //  However we need to delay it a bit since don't know if there is a target widget
            // or not.  So if there is no target widget, then there is no response via
            // IWC channel, so we rely on the delay to invoke the cancel callback.
            _.delay(function() {
                if(self._onCancelCb) {
                    self._onCancelCb();
                }
            }, 2000);

        });

    }

    DnDSource.prototype.startDrag = function (dataType, arrayOfData, onDroppedCb, onCancelCb) {
        var self = this;
        var dndIwcChannel = "ufs.dnd.response_" + (new Date()).getTime();

        var payload = {
            iwcChannel      : dndIwcChannel,
            srcWidgetName   : this._widgetName,
            dataType        : dataType,
            data            : arrayOfData
        };

        OWF.DragAndDrop.startDrag({
            dragDropLabel: "<span style='background:lightgrey'>" +
                                arrayOfData.length + " " +  dataType +
                            "</span>" ,
            dragDropData: payload
        });

        // listen the the iwc channel we created above
        OWF.Eventing.subscribe(dndIwcChannel, function(result) {
            self._handleDndIwcResponse(result, arrayOfData);
        });

        //OWF.Eventing.subscribe(dndIwcChannel, function(result){
        //   // if target widget accepts the data, then invoke the success callback
        //   if(result.dndAccept === true) {
        //       onDroppedCb(result.targetWidgetName, arrayOfData);
        //   }
        //   else {
        //      // else the DnD operation is canceled.
        //      onCancelCb();
        //   }
        //});
    };

    DnDSource.prototype._handleDndIwcResponse = function (iwcPayload, arrayOfData) {
        // if target widget accepts the data, then invoke the success callback
        if(iwcPayload.dndAccept === true) {
            this._onDroppedCb(result.targetWidgetName, arrayOfData);
            this._onDroppedCb = null;
        }
        else {
            // else the DnD operation is canceled, so invoked the cancel.
            this._onCancelCb();

            // null out the cancel callback so the onDragStop() callback does not make a duplicate
            // callback.
            this._onCancelCb = null;
        }
    };

    return DnDSource;
})();