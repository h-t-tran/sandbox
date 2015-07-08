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
    this._bookmarkJsonPayload =  [
                { id : "demo_root_1", text : "Bookmarks", type : "root",
                    children : []
                },
                { id : "demo_root_2", text : "Sketches", type : "root",
                    children : []
                }

            ];



    var self = this;

    this.initialize = function() {
        console.debug("initialize this.__treeAnchorDiv = ", this._treeAnchorDiv,
            ", _test = ", this._test);

        this._treeAnchorDiv.jstree({
            "core": {

                "animation": 0,
                "check_callback": true,
                //"themes": {"stripes": true},

                'data' : function (obj, callback) {
                    console.debug("getting data")
                    callback.call(this, self._bookmarkJsonPayload);

                    //if(self._flag == false) {
                    //    callback.call(this, self._bookmarkJsonPayload);
                    //
                    //}
                    //else {
                    //    callback.call(this, [
                    //        {
                    //            state : { 'opened' : true, 'selected' : false },
                    //            id: "demo_root_1", text: "BookmarkS", type: "root",
                    //            children: [
                    //                "Child 1",
                    //                "Child 1.5",
                    //                {
                    //                    id: "1234",
                    //                    text: "Child 1.6",
                    //                    children: [
                    //                        {id: "demo_child_1.6a", text: "children one", type: "file"}
                    //                    ]
                    //                },
                    //
                    //                {
                    //                    id: "demo_child_1",
                    //                    text: "Child 2",
                    //                    children: [
                    //                        {id: "demo_child_2", text: "Sketche 1", type: "file", isBookmark : false },
                    //                        {id: "demo_child_3", text: "Bookmark 2", type: "file", isBookmark : true }
                    //                    ]
                    //                }
                    //            ]
                    //        },
                    //        {id: "demo_root_2", text: "SketcheS", type: "root"}
                    //
                    //    ]);
                    //}

                    self._flag = ! self._flag;
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
                    "icon": "./static/file.png", // "glyphicon glyphicon-file",
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

    this.getAllBookmarks = function() {
        this._tocSvc.getAllBookmarks(function(jsonPayload) {
            console.debug("got bookmark json payload ", jsonPayload);
            self._bookmarkJsonPayload = jsonPayload;
            self._tree.refresh();
        });
    }
}