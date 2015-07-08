function Toc(args) {
    //Object.defineProperty(this, "foo", {
    //    get: function() {
    //        console.debug("foo-get");
    //        return "foo-get"
    //    },
    //    set: function(val) {
    //        console.debug("foo-set");
    //    },
    //    _test: 789,
    //    _treeAnchorDiv : args.treeAnchorDiv,
    //    _$ : args.jquery
    //
    //});

    console.debug("Toc ctor args ", args);
    this._treeAnchorDiv = args.treeAnchorDiv;
    this._$ = args.jquery;
    this._tocSvc = args.tocSvc;
    this._flag = false;
    this._tree = null;
    // build the initial empty tree
    this._bookmarkJsonPayload =
            [
                {
                    id : "bookmark_root",
                    text : "Bookmarks (loading...)",
                    type : "root",
                    children : []
                },
                {
                    id : "sketch_root",
                    text : "Sketches (loading...)",
                    type : "root",
                    children : []
                }
            ];



    var self = this;

    /**
     * initialize the tree and all its properties
     */
    this.initialize = function() {
        console.debug("initialize this.__treeAnchorDiv = ", this._treeAnchorDiv,
            ", _test = ", this._test);

        // need to init the jsTree context menu first before creating the tree.
        this._initCtxMenu();

        // build the tree
        this._treeAnchorDiv.jstree({
            "core": {

                "animation": 0,
                "check_callback": true,
                //"themes": {"stripes": true},

                'data' : function (obj, callback) {
                    console.debug("getting data")
                    callback.call(this, self._bookmarkJsonPayload);
                }
            },
            "types": {
                "#": {
                    "max_children": 1,
                    "max_depth": 4,
                    "valid_children": ["root"]
                },
                // use to specify the icon, must be "root"
                "root": {
                    "icon": "./assets/tree_icon.png",
                    "valid_children": ["default"]
                },
                "default": {
                    "valid_children": ["default", "file"]
                },
                "file": {
                    "icon": "./assets/file.png", // "glyphicon glyphicon-file",
                    "valid_children": []
                }
            },
            "plugins": [
                "contextmenu",
                //"dnd"
                //, "search",
                //"checkbox",
                "state"
                , "types"
                //, "wholerow"
            ]
        });

        // save the tree
        this._tree = this._treeAnchorDiv.jstree();
    }

    /**
     * retrieve all bookmarks and refresh the tree.
     */
    this.getAllBookmarks = function() {
        this._tocSvc.getAllBookmarks(function(jsonPayload) {
            console.debug("got bookmark json payload ", jsonPayload);
            self._bookmarkJsonPayload = jsonPayload;
            self._tree.refresh();
        });
    }

    /**
     * initialize the ctx tree.
     */
    this._initCtxMenu = function() {
        $.jstree.defaults.contextmenu.items = function(node, cb) {
            console.log("build context menu node ", node);
            console.log("build context menu cb ", cb);

            if(node.original.isBookmark == true) {
                return {
                    "Save Bookmark...": {
                        "label": "Save Bookmark...",
                        "action": function (obj) {
                            console.debug("doCopy")
                        }
                    },
                    "Delete Bookmark...": {
                        "label": "Copy Bookmark...",
                        "action": function (obj) {
                            console.debug("doCopy")
                        }
                    },
                    "Copy Bookmark": {
                        "label": "Paste Bookmark",
                        "action": function (obj) {
                            console.debug("doPaste")
                        }
                    }
                };
            } else {
                return {
                    "Delete ...": {
                        "label": "Copy...",
                        "action": function (obj) {
                            console.debug("doCopy")
                        }
                    },
                    "Copy ": {
                        "label": "Paste",
                        "action": function (obj) {
                            console.debug("doPaste")
                        }
                    }
                };

            }

        }

    }
}