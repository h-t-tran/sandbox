function Toc(args) {

    console.debug("Toc ctor args ", args);
    this._treeAnchorDiv = args.treeAnchorDiv;
    this._$ = args.jquery;
    this._tocSvc = args.tocSvc;
    this._flag = false;
    this._tree = null;
    this._loader = args.tocLoader;

    // build the initial empty tree
    this._bookmarkJsonPayload =
            [
                {
                    id : "bookmark_root",
                    text : "Bookmarks (loading...)",
                    type : "root",
                    children : []
                }
                //, {
                //    id : "sketch_root",
                //    text : "Sketches (loading...)",
                //    type : "root",
                //    children : []
                //}
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
                    "icon": "./assets/favorite.png",
                    "valid_children": ["default"]
                },
                "default": {
                    "valid_children": ["default", "file"]
                },
                "file": {
                    "icon": "./assets/File-icon.png", // "glyphicon glyphicon-file",
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

        self._loader.show("Loading bookmarks...");
        this._tocSvc.getAllBookmarks(function(jsonPayload) {
            console.debug("got bookmark json payload ", jsonPayload);
            self._bookmarkJsonPayload = jsonPayload;

            // for the tree to rebuild
            self._tree.refresh();

            // hide the loader.
            self._loader.hide();
        });
    }

    /**
     * initialize the ctx tree.
     */
    this._initCtxMenu = function() {
        $.jstree.defaults.contextmenu.items = function(node, cb) {
            console.log("build context menu node ", node);
            console.log("build context menu cb ", cb);
            var menuItems = {};

            var node = node;
            var org = node.original;


            $.each(org.actions, function (index, value) {
                var displayLabel = value.label;
                menuItems[displayLabel] =  {
                    label: displayLabel,
                    action: function (obj) {
                        console.debug("handler for " + displayLabel);
                    }
                };
            });


            //// is this a file
            //if(org.type == 'file') {
            //    // if bookmark, we traverse and generate all the possible action we can perform on it.
            //    if(org.isBookmark == true) {
            //        $.each(org.actions, function (index, value) {
            //            var displayLabel = value.label;
            //            menuItems[displayLabel] =  {
            //                label: displayLabel,
            //                action: function (obj) {
            //                    console.debug("handler for " + displayLabel);
            //                }
            //            };
            //        });
            //    }
            //}
            //else  // it is a folder
            //{
            //    menuItems = {
            //        "New Folder": {
            //            label: "New Folder...",
            //            action: function (obj) {
            //                console.debug("new folder");
            //            }
            //        },
            //        "Delete": {
            //            label: "Delete",
            //            action: function (obj) {
            //                console.debug("delete folder")
            //
            //            }
            //        }
            //    };
            //}
            //console.debug("menuItems = ", menuItems)
            return menuItems;

        }

    }
}