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
 * identified contract. Any reproduction of computer sofware or portions
 * thereof marked with this legend must also reproduce the markings.
 * Any person, other than the Government, who has been provided access to such   
 * software must promptly notify the above named Contractor.
 *
 *  Copyright 2012 L-3 Communications, Linkabit, All Rights Reserved
 *
 *****************************************************************************/


describe("DashboardSpec", function() {
    
	/**
	 * testing function _getExpandedRows()
	 */
   describe("when validating _calcPercent", function() 
   {
	   var dashboard;
	   
	   beforeEach( function()
	   {
		   // create a mock timer that has a connect() function
		   var mockTimer = {
				   connect: function() {}
		   };
		   
		   dashboard = new linkabit.overview.Dashboard({			   
			   timer: mockTimer			   
		   });    	   
       });
	   
	   it("should be able the launch browser for selected terminals", function()
	   {
		    // create a store containing a few terminals.
		    var terms = [];
		    for(var i = 0; i < 5; i++)
		    {
		    	var term = {};
			    term[linkabit.utils.Constants.NETMEM_ID] = i;
			    term[linkabit.utils.Constants.NETMEM_IPADDR] = "1.2.3." + i;
			    term[linkabit.utils.Constants.NETMEM_NAME] = "NM" + i;
			    terms.push(term);
		    }
		    console.debug("terminals = ", terms);

		    // create a store with some items
		    var data = 	
		    {
	    			identifier: linkabit.utils.Constants.NETMEM_ID, //'id',
	    			items: terms
   			};
   	
		    console.debug("data = ", data);
		   	var store = dojo.data.ItemFileWriteStore({data: data});

		   	// must add a dummy term to cause the store to load.
		   	var dummyTerm = {};
		   	dummyTerm[linkabit.utils.Constants.NETMEM_ID] = 99;
		   	dummyTerm[linkabit.utils.Constants.NETMEM_IPADDR] = "1.2.3.99";
		   	dummyTerm[linkabit.utils.Constants.NETMEM_NAME] = "NM99";
		    store.newItem(dummyTerm);
		    
//		   	// populate the store
//		   	dojo.forEach(terms, function(t)
//   			{
//		   			//store.newItem(t);
//   			});
		   	
		   	
		    //console.debug("store ", store);	
		    	
		    // now pretend we select 2 terminals
		    var selTerms = [ terms[0], terms[1] ];
		    
		    var selectedIPs = [];
		    dashboard._launchBrowser = function(windowName, ip)
		    {
		    	console.debug("_launchBrowser args = ", arguments);
		    	
		    	// save the IP address so we can verify it matches those in 
		    	// selTerms
		    	selectedIPs.push(ip);
		    };
	
		    dashboard._viewTerminals(selTerms, store);
		    
		    // verify the selects IPs count is the same as the selected terms
		    // an non select terms does not appears in the select IPs array.
		    expect(selectedIPs.length).toEqual( selTerms.length );
		    
		   	dojo.forEach(selTerms, function(t)
   			{
		   		console.debug("selectedIPs ", selectedIPs);
		   		var ip = t[linkabit.utils.Constants.NETMEM_IPADDR];
		   		
		   		// must to toString to get IP string, else JS interprets ip as object.
	   			var idx = selectedIPs.indexOf(ip.toString());
	   			console.debug("search for " + ip + " returns " + idx);
	   			// make sure the indx is not -1 which indicates it exist.
	   			expect(idx).not.toEqual(-1);
   			});
		    
	   });

       it("should be able to return valid percent with 00 as two decimal places", function()
       {    	       	   
    	   var percent = dashboard._calcPercent(1,2);
    	   // need to convert to string so we can see the 2 decimal places.
    	   expect( percent.toString() ).toBe(  "50.00" );
       });  
       
       it("should be able to return valid percent with 1 decimal place accuracy and we append an extra 0", function()
       {    	       	   
    	   var percent = dashboard._calcPercent(123, 1000);
    	   expect( percent.toString() ).toBe(  "12.30" );
       });  
       
       it("should be able to return 0 % because of negative numerator", function()
       {    	       	   
    	   var percent = dashboard._calcPercent(-123, 1000);
    	   expect( percent.toString() ).toBe( "0.00" );
       }); 
       
       it("should be able to return 0 % because of negative denominator", function()
       {    	       	   
    	   var percent = dashboard._calcPercent(123, -1000);
    	   expect( percent.toString() ).toBe( "0.00" );
       });        
       
       it("should be able to return 0 % because of numerator is greater than demoninator", function()
       {    	       	   
    	   var percent = dashboard._calcPercent(555, 2);
    	   expect( percent.toString() ).toBe( "0.00" );
       });    
   });

   
});


