function TocSvc(args) {

    console.debug("TocSvc ctor args ", args);

    this.getAllBookmarks = function(cb) {
        console.debug("TocSvc getAllBookmarks");
        setTimeout(function() {
            cb([
                    {
                        state : { 'opened' : true, 'selected' : false },
                        id: "demo_root_1", text: "BookmarkS", type: "root",
                        children: [
                            "Child 1",
                            "Child 1.5",
                            {
                                id: "1234",
                                text: "Child 1.6",
                                children: [
                                    {id: "demo_child_1.6a", text: "children one", type: "file"}
                                ]
                            },

                            {
                                id: "demo_child_1",
                                text: "Child 2",
                                children: [
                                    {id: "demo_child_2", text: "Sketche 1", type: "file", isBookmark : false },
                                    {id: "demo_child_3", text: "Bookmark 2", type: "file", isBookmark : true }
                                ]
                            }
                        ]
                    },
                    {id: "demo_root_2", text: "SketcheS", type: "root"}

                ]);
        }, 3000);
    },

    this.createSubfolder = function(parentPath, newFolderName) {
        console.debug("createBookmark");
    },
    this.createBookmark = function(parentPath, bookmarkName) {
        console.debug("createBookmark");
    },
    this.deleteBookmark = function(pathToBookmark) {
        console.debug("deleteBookmark");
    },

    this.renameBookmark = function(pathToCurrBookmark, newBookmarkName) {
        console.debug("renameBookmark");
    }
}