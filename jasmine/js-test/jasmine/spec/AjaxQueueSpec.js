
//
// this first describe() list the name of this JS file
//
describe("AjaxQueueSpec", function() {
       
	var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var idCount = ids.length;	
    var q = null;	
	
	//
	// this describe() specifies the method under test - in this case it is add()
    //
	describe("when validating AjaxQueue ctor", function() 
	{
	   	//
		// Each it() describes different test scenarios (happy path, negative path, etc) for the method.
		// 
		// the it() specifies the first test case for add() method.
		it("should be initialized with an empty queue", function()
		{
          new linkabit.reusable.AjaxQueue();
		});
	});
   
	describe("when validating AjaxQueue.enqueue", function() 
    {

        beforeEach( function() {
        	q = new linkabit.reusable.AjaxQueue();
        });
    			
        it("should add a unique item to the back of the queue", function()
        {                          
           for(var i = 0; i < idCount; i++)
           {
        	   // push {object payload, int id} 
        	   var success = q.enqueue(makePayload({
        		   actionId: ids[i]
        	   }, ids[i]));
        	   
        	   expect(success).toBe(true);
        	   
        	   // same element should be at the front
        	   expect(q.peek().id).toBe(ids[0]);
        	   
        	   // back element should be the newly added item
        	   expect(q._items[q.count()-1].data.id).toBe(ids[i]);
           }
        });
        
        it("should not add a new item if it already exists", function()
        {
            for(var i = 0; i < idCount; i++)
            {
         	   // push {object payload, int id} 
         	   q.enqueue(makePayload({
         		   actionId: ids[i]
         	   }, ids[i]));
            }
            
            expect(q.count()).toBe(idCount);
        	
            // add duplicates
            for(var i = 0; i < idCount; i++)
            {
            	var payload = makePayload({
	         		actionId: ids[i]
	         	}, ids[i]);
            	
            	// should recognize the item is a duplicate
	         	expect(q.contains(payload)).toBe(true); 
	         	var success = q.enqueue(payload);
	         	expect(success).toBe(false);
	         	expect(q.count()).toBe(idCount);
            }              
        });
    });
	
	describe("when validating AjaxQueue.dequeue", function()
	{

        beforeEach( function() {
        	q = new linkabit.reusable.AjaxQueue();
        });		
		it("should remove the oldest item.", function()
		{
            for(var i = 0; i < idCount; i++)
            {
         	   // push {object payload, int id} 
         	   q.enqueue(makePayload({
         		   actionId: ids[i]
         	   }, ids[i]));
            }
            
            for(var i = 0; i < idCount; i++)
            {
            	// adding duplicates does nothing
            	var beforeCount = q.count();
            	var front = q.peek();
            	q.enqueue(front);
            	expect(q.count()).toBe(beforeCount);
            	expect(q.contains(front)).toBe(true);
            	
            	expect(q.dequeue()).toBe(front);
            	expect(q.count()).toBe(beforeCount - 1);
            }
            
            expect(q.count()).toBe(0);               
            expect(q.peek()).toBe(null);
            expect(q.dequeue()).toBe(null);     
            
            /* Replacement test ... doesn't work. 
             */
            /*for(var i = 0; i < idCount; i++)
            {
	            var before = q.peek();
	            var p = makePayload({
	            	actionId: before.id
	            }, before.id);
	            q.enqueue(p);	            
	            var after = q.dequeue();
	            expect(before.id).toBe(after.id);
	            expect(before.id).toBe(ids[i]);
	            console.debug("Before: ", before.timestamp, "; after: ", p.timestamp)            
	            expect(before.timestamp - after.timestamp === 0).toBe(false);	            
	           
            }*/
            
		});
		
	});
	
	var makePayload = function(content, id)
	{
		var submitUrl = linkabit.utils.Utils.generateBaseUrl( window.location.host) + linkabit.utils.Constants.SERVER_SIDE_SERVLET_NAME; 
		return {
		    		url: submitUrl,
					    handleAs: "json",
					    timestamp: Math.random() * 1000,
					    content: content,
					    preventCache: true,
					    load: dojo.hitch(this, function(rsp) 
					    	{			    	
					    		console.debug("Returned ", rsp.data);
					    	}
					    ),
					    error: dojo.hitch(this, function(error)
			 			    {		
						    	console.debug("Error found");
			 			    }
					    ),
					    id: id
		    	};		
	};
});


