
//
// this first describe() list the name of this JS file
//
describe("BoundedQueueSpec", function() {
	var q;   
	var max = 5;
	//
	// this describe() specifies the method under test - in this case it is add()
    //
	describe("when calling BoundedQueue ctor", function()
	{
        it("should properly initialize all its properties", function()
        {
			q = new linkabit.reusable.BoundedQueue().capacity(max);	
	        
			expect(q.count).toEqual(0);
			expect(q.maxCount).toEqual(max);
        });
	});
	describe("when validating BoundedQueue.enqueue", function() 
	{

		it("should correctly add elements", function()
		{
		  q = new linkabit.reusable.BoundedQueue().capacity(max);				
          for(var i = 0; i < max; i++)
          {
        	  expect(q.count).toBe(i);        	  
        	  q.enqueue(i);
        	  expect(q.count).toBe(i+1);
          }
          q.enqueue(6);
          expect(q.count).toBe(max);
		});
       
	});
   
});


