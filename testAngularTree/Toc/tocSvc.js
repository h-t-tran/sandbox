function TocSvc(args) {

    this._counter = 1;
    this._BOOKMARK_PREFIX = "Bookmark";
    this._SKETCH_PREFIX = "Sketch";

    console.debug("TocSvc ctor args ", args);

    var self = this;

    /**
     * put a request on the pub/sub to get all bookmark from the TOC widget.
     */
    this.getAllBookmarks = function(cb) {

        console.debug("TocSvc getAllBookmarks");

        setTimeout(function() {
            self._counter ++;

            var json = self._translateJson(self._getSampleBookmarks());
            cb(json);
            return;


            //cb([
            //        {
            //            state : { 'opened' : true, 'selected' : false },
            //            id: "bookmark_root",
            //            text: "Bookmarks",
            //            type: "root",
            //
            //            children: [
            //                {
            //                    id: "9c9cbdb2-b826-49f0-bc56-f00b519d5970",
            //                    text: "John" + self._counter,
            //                    actions: [ "Add Subfolder", "Add Bookmark" ],
            //                    children: []
            //                },
            //                {
            //                    id: "9c9cbdb2-b826-49f0-bc56-f00b519d5971",
            //                    text: "Joe" + self._counter,
            //                    actions: [ "Add Subfolder", "Add Bookmark" ],
            //                    children: []
            //                },
            //
            //                {
            //                    id: "1234",
            //                    text: "Jane",
            //                    children: [
            //                        {
            //                            id: "demo_child_1.6a",
            //                            text: "China Sea",
            //                            type: "file",
            //                            actions: [ "Delete Bookmark", "Rename Bookmark" ]
            //                        }
            //                    ]
            //                },
            //
            //                {
            //                    id: "demo_child_1",
            //                    text: "Jane Bookmarks",
            //                    children: [
            //                        {id: "demo_child_2", text: "Sketch 1", type: "file", isBookmark : false, actions: [ "Delete Bookmark", "Rename Bookmark" ] },
            //                        {id: "demo_child_3", text: "Bookmark 2", type: "file", isBookmark : true, actions: [ "Delete Bookmark", "Rename Bookmark" ] },
            //                        {id: "demo_child_4", text: "dir1" + self._counter, type: "dir", isBookmark : false, actions: [ "Delete Bookmark", "Rename Bookmark" ] }
            //                    ]
            //                }
            //            ]
            //        },
            //        //{id: "sketch_root", text: "Sketches", type: "root"}
            //
            //    ]);
        }, 1000);
    },

    this.createSubfolder = function(parentPath, newFolderName, onSuccessCb, onFailureCb) {
        console.debug("createBookmark");
    },

    this.createBookmark = function(parentPath, bookmarkName, onSuccessCb, onFailureCb) {
        console.debug("createBookmark");
    },
    this.deleteBookmark = function(pathToBookmark, onSuccessCb, onFailureCb) {
        console.debug("deleteBookmark");
    },

    this.renameBookmark = function(pathToCurrBookmark, newBookmarkName) {
        console.debug("renameBookmark");
    }

    /**
     * translate the json from the non-ui TOC map widget to the JSON format understood by the tree.
     * @return the json understood by the UI
     */
    this._translateJson = function(backendJson) {
        var uiJson = [
            {
                state: {'opened': true, 'selected': false},
                id:     backendJson.id,
                text:   backendJson.label,
                type: "root",
                isBookmark  : true,
                actions: self._formatActions(backendJson.context, false),
                children: []
            }
        ];

        var root = uiJson[0];
        $.each( backendJson.controls, function( key, value ) {
            root.children = root.children.concat(
                {
                    id      : value.id,
                    text    : value.label,
                    type    : value.leaf === true ? "file" : "folder",
                    actions : self._formatActions(value.context, true),
                    isBookmark  : true,
                    children: []
                }
            );
        });

        console.debug("backendJson ", backendJson)
        console.debug("uiJson ", uiJson)

        return uiJson;
    }

    /**
     * @param  commandsArray {Array} and array of string representing a series of command understood by the TOC widget
     * @param  trimPrefix {Boolean} remove the prefix of "Bookmark" or "Sketch" from the string.
     *
     * @return an array of the following format
     * [
     *  {   label: "Add",  command: "Add Bookmark" },
     *  {   label: "Delete",  command: "Delete Bookmark" },
     * ]
     */
    this._formatActions = function(commandsArray, trimPrefix) {
        console.debug("commandsArray ", commandsArray)
        var actions = [];
        $.each( commandsArray, function( key, value ) {
            var label = trimPrefix === true ?
                    value.replace(self._BOOKMARK_PREFIX, "").trim() :
                    value;

            actions = actions.concat({
                label: label,
                command: value
             })
        });
        return actions;
    }
    /**
     *
     * @returns {{custom: string, id: string, label: string, context: string[], controls: *[], bookmark: boolean, AE_subwidgetId: string}}
     * @private
     */
    this._getSampleBookmarks = function(){

        var json =
        {
            "custom": "bookmark",
            "id": "bookmark",
            "label": "Bookmarks",
            "context": [
                "Add Bookmark"
            ],
            "controls": [
                {
                    "id": "Testing3",
                    "label": "Testing3",
                    "state": false,
                    "leaf": true,
                    "context": [
                        "Add Bookmark",
                        "Rename Bookmark",
                        "Update Bookmark",
                        "Delete Bookmark",
                        "Load Bookmark"
                    ]
                },
                {
                    "id": "Testing2",
                    "label": "Testing2",
                    "state": false,
                    "leaf": true,
                    "context": [
                        "Add Bookmark",
                        "Rename Bookmark",
                        "Update Bookmark",
                        "Delete Bookmark",
                        "Load Bookmark"
                    ]
                },
                {
                    "id": "Testing1",
                    "label": "Testing1",
                    "state": false,
                    "leaf": true,
                    "context": [
                        "Add Bookmark",
                        "Rename Bookmark",
                        "Update Bookmark",
                        "Delete Bookmark",
                        "Load Bookmark"
                    ]
                },
                {
                    "id": "Testing4",
                    "label": "Testing4",
                    "state": false,
                    "leaf": true,
                    "context": [
                        "Add Bookmark",
                        "Rename Bookmark",
                        "Update Bookmark",
                        "Delete Bookmark",
                        "Load Bookmark"
                    ]
                }
            ],
            "bookmark": false,
            "AE_subwidgetId": "4a29a00c-25ad-11e5-8c9a-0932cb7cd6df"
        }

        return json;
    }
}