function TocSvc(args) {

    this._counter = 1;


    console.debug("TocSvc ctor args ", args);

    var self = this;
    this.getAllBookmarks = function(cb) {
        console.debug("TocSvc getAllBookmarks");
        setTimeout(function() {
            self._counter ++;

            cb([
                    {
                        state : { 'opened' : true, 'selected' : false },
                        id: "bookmark_root",
                        text: "Bookmarks",
                        type: "root",

                        children: [
                            {
                                id: "9c9cbdb2-b826-49f0-bc56-f00b519d5970",
                                text: "John" + self._counter,
                                actions: [ "Add Subfolder", "Add Bookmark" ],
                                children: []
                            },
                            {
                                id: "9c9cbdb2-b826-49f0-bc56-f00b519d5971",
                                text: "Joe" + self._counter,
                                actions: [ "Add Subfolder", "Add Bookmark" ],
                                children: []
                            },

                            {
                                id: "1234",
                                text: "Jane",
                                children: [
                                    {
                                        id: "demo_child_1.6a",
                                        text: "China Sea",
                                        type: "file",
                                        actions: [ "Delete Bookmark", "Rename Bookmark" ]
                                    }
                                ]
                            },

                            {
                                id: "demo_child_1",
                                text: "Jane Bookmarks",
                                children: [
                                    {id: "demo_child_2", text: "Sketch 1", type: "file", isBookmark : false, actions: [ "Delete Bookmark", "Rename Bookmark" ] },
                                    {id: "demo_child_3", text: "Bookmark 2", type: "file", isBookmark : true, actions: [ "Delete Bookmark", "Rename Bookmark" ] },
                                    {id: "demo_child_4", text: "dir1" + self._counter, type: "dir", isBookmark : false, actions: [ "Delete Bookmark", "Rename Bookmark" ] }
                                ]
                            }
                        ]
                    },
                    {id: "sketch_root", text: "Sketches", type: "root"}

                ]);
        }, 1000);
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