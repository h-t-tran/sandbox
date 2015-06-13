 /*****************************************************************************
 *
 *  RESTRICTED RIGHTS
 *                     
 * Contractor Name       L-3 Communications, Inc., Linkabit Division            
 * Contractor Address    9890 Towne Centre Drive, San Diego, CA 92121        
 *                                            
 * The Government's rights to use, modify, reproduce, release, perform,
 * display, or disclose this software are restricted by  paragraph (b)(3)
 * of the Rights in Noncommercial Computer Software and Noncommercial
 * Computer Software Documentation clause contained in the above
 * identified contract. Any reproduction of computer software or portions
 * thereof marked with this legend must also reproduce the markings.
 * Any person, other than the Government, who has been provided access to such   
 * software must promptly notify the above named Contractor.
 *
 *  Copyright 2012 L-3 Communications, Linkabit, All Rights Reserved
 *
 *****************************************************************************/

////////////////////////////////////
// Unit test for linkabit.reusable.LinkabitAjax.js
/////////////////////////////////////

describe("UtilsSpec", function() {
       
	/**
	 * testing constructore()
	 */
   describe("when validating linkabit.reusable.LinkabitAjax ctor", function() 
   {
       it("should be able to detect crossite scripting is enabled", function()
       {
    	  var hname = "1.2.3.4"
    	  var ajax = new linkabit.reusable.LinkabitAjax({
    		  hostname: hname,
    		  fullUrl: 'http://' + hname + ':8090/HciWeb/HciApp-Lite.html?' +
				    		  linkabit.utils.Constants.MODEM_WEB_IP_URL_PARAM + "=localhost&" +
				    		  linkabit.utils.Constants.MODEM_WEB_PORT_URL_PARAM + '=8090'
    	  }); 
    	  console.debug("ajax = ", ajax);
    	  // since the hostname is 1.2.3.4 and the ip is localhost, thus they differ.
    	  expect(ajax._XsiteCallEnabled).toBe(true);

       });
       
       it("should be able to detect crossite scripting is disabled", function()
       {
    	  var hname = "1.2.3.4"
    	  var ajax = new linkabit.reusable.LinkabitAjax({
    		  hostname: hname,
    		  fullUrl: 'http://' + hname + ':8090/HciWeb/HciApp-Lite.html?' +
	    		  linkabit.utils.Constants.MODEM_WEB_IP_URL_PARAM + 'ip=' + hname + '&' +
	    		  linkabit.utils.Constants.MODEM_WEB_PORT_URL_PARAM + 'port=8090'
    	  }); 
    	  // since the hostname is the same as the modemwebport, x-site is disabled
    	  expect(ajax._XsiteCallEnabled).toBe(false);

       });
       
       it("should be able to detect crossite scripting is disabled when no modemwebip is specified", function()
       {
    	  var hname = "1.2.3.4"
    	  var ajax = new linkabit.reusable.LinkabitAjax({
    		  hostname: hname,
    		  fullUrl: 'http://' + hname + ':8090/HciWeb/HciApp-Lite.html'
    	  }); 
    	  // since the hostname is the same as the modemwebport, x-site is disabled
    	  expect(ajax._XsiteCallEnabled).toBe(false);

       });

       it("should be able to queue duplication ajax requests", function()
       {
    	  
    	  var hname = "1.2.3.4"
    	  var ajax = new linkabit.reusable.LinkabitAjax({
    		  hostname: hname,
    		  fullUrl: 'http://' + hname + ':8090/HciWeb/HciApp-Lite.html'
    	  }); 
    	  
    	  
	  		var successCallBack = jasmine.createSpy();
	  		var url = 'http://anything.com';
	  		// call the real ajax xhrGet() function.  This call should go to the server thus there is
	  		// is 0 in the queue
	  		//linkabit.utils.Utils.sendResetErrorStatAjax(url,successCallBack);	
	  		
	  		var request1 = 
  			{
				url: url,
			    content: 
			    	{
			    		actionId	:  linkabit.utils.ActionConstants.RESET_ERROR_ACTION_ID 
			    	}, 
			    // give it a load method that we can call back
			    // this will cause the ajax queue to dequeue.
			    load: function()
			    {
			    	console.debug("unit test on load")
			    }
			};
	  		dojo.xhrGet(request1);
	  		//console.debug("ajax._queue.count ", ajax._queue.count)
	  		
	  		// verify the ajax queue size is 0
	  		expect(ajax._queue.count()).toBe(0);
	  		expect(ajax._inTransitRequest).not.toBeNull();
	  		expect(ajax._inTransitRequest.id).toBe(linkabit.utils.ActionConstants.RESET_ERROR_ACTION_ID);
	    	
	  		//
	  		// now send another similar ajax which will cause the ajax to ignore this, thus the
	  		// queue is still 0
	  		//
	  		//linkabit.utils.Utils.sendResetErrorStatAjax(url,successCallBack);
	  		dojo.xhrGet(request1);
	  		expect(ajax._queue.count()).toBe(0);
	  		expect(ajax._inTransitRequest).not.toBeNull();
	  		expect(ajax._inTransitRequest.id).toBe(linkabit.utils.ActionConstants.RESET_ERROR_ACTION_ID);
	    	
	  		//
	  		// now send a different ajax.  This should get queue since the first ajax
	  		// has not returned yet, thus queue size is now 1
	  		//
	  		var uniqueActionId = 99;
	  		var payload = 
	  			{
					url: url,
				    content: 
				    	{
				    		actionId	:  uniqueActionId // this must be diff from
				    						  // linkabit.utils.ActionConstants.RESET_ERROR_ACTION_ID
				    						  // so the ajax req is unique
				    	}, 
				    
				};
	  		
	  		dojo.xhrGet(payload);
	  		
	  		// there should be 1 requests in the queue which is the new request
	  		expect(ajax._queue.count()).toBe(1);
	  		expect(ajax._inTransitRequest).not.toBeNull();
	  		expect(ajax._inTransitRequest.id).toBe(linkabit.utils.ActionConstants.RESET_ERROR_ACTION_ID);
	  		
	  		//
	  		// now simulate the server responding to the first ajax request
	  		//
	  		request1.load();
	  		// there should not be anything in the queue since the linkabitAjax
	  		// will retrieve the queue request and send it to the server
	  		expect(ajax._queue.count()).toBe(0);
	    	
	  		// the in-transit request is the 2nd request with uniqueActionId
	  		expect(ajax._inTransitRequest).not.toBeNull();
	  		expect(ajax._inTransitRequest.id).toEqual(uniqueActionId);
	  		
       });
   });
   

});


