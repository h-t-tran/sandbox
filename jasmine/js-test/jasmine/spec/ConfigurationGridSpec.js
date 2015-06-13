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


describe("ConfigurationGridSpec", function() {
    
	/**
	 * testing function _getExpandedRows()
	 */
   describe("when validating ConfigurationGrid._normalizeBitPackdata", function() 
   {
	   var grid;
	   
	   beforeEach( function()
	   {
		   grid = new linkabit.config.ConfigurationGrid({});    	   
       });

	   /**
	    * @param result {Array} contains elements we want to match to the expected array
	    * @param expected {Array} contains gold copy of the elements
	    */
	   var isSameFunc = function(result, expected)
	   {
		   expect(result.length ).toBe( expected.length );  
    	   for(var i = 0; i < result.length; i++)
    	   {
    		   expect( result[i] ).toBe( expected[i]  );
    	   }
	   };
	   
	   //
	   // test cases for terminal data
	   //
       it("should be able to return normalized values for terminal data  ", function()
       {    	   
    	   
    	   var unnormalizedValues = ["334", "881", "26", "27", "3", "BPSK-1", "10"];
    	   var normalized = grid._normalizeBitPackdata(grid._TERMINAL_PARAM_ROW, unnormalizedValues);
    	   
    	   // verify the returned normalized values matches the expected array
    	   var expected = ["33.4", "88.1", "2.6", "2.7", "3", "BPSK-1", "10"];
    	   isSameFunc(normalized, expected);
       });  
       
       it("should be able to detect incomplete terminal data  ", function()
       {    	   
    	   var unnormalizedValues = ["334", "881", "26"];
    	   var normalized = grid._normalizeBitPackdata(grid._TERMINAL_PARAM_ROW, unnormalizedValues);
    	  
    	   // since we didn't pass in enough data, the returned normalized array should be the same
    	   // as the unnormalized one
    	   isSameFunc(normalized, unnormalizedValues);
       });  
       
       //
	   // test cases for system data
	   //
       it("should be able to return normalized values for system data  ", function()
       {    	   
    	   
    	   var unnormalizedValues = ["-87400", "-177400", "30278903", "54419293", "8328", "428", "4576"];
    	   var normalized = grid._normalizeBitPackdata(grid._SYSTEM_ROW, unnormalizedValues);
    	   
    	   // verify the returned normalized values matches the expected array
    	   var expected = ["-87.400", "-177.400", "30278903", "54419293", "83.28", "428", "457.6"];
    	   isSameFunc(normalized, expected);
       });       
       
       it("should be able to detect incomplete system data  ", function()
       {    	   
    	   var unnormalizedValues = ["-87400", "-177400", "30278903"];
    	   var normalized = grid._normalizeBitPackdata(grid._SYSTEM_ROW, unnormalizedValues);
    	  
    	   // since we didn't pass in enough data, the returned normalized array should be the same
    	   // as the unnormalized one
    	   isSameFunc(normalized, unnormalizedValues);
       });  
       
       //
	   // test cases for network data
	   //
       it("should be able to return normalized values for network data  ", function()
       {    	   
    	   
    	   var unnormalizedValues = ["ZeroTest Location: 14.0 West", "ZBEAM"];
    	   var normalized = grid._normalizeBitPackdata(grid._NETWORK_ROW, unnormalizedValues);
    	   
    	   // since there is no conversion for network,
    	   // verify the returned normalized values matches unnormalized array    	   
    	   isSameFunc(normalized, unnormalizedValues);
       });       
       
       
       //
	   // test cases for version data
	   //
       it("should be able to return normalized values for version data  ", function()
       {    	   
    	   
    	   var unnormalizedValues =  ["1.0.0.2", "10.0.2", "8.12", "2"];
    	   var normalized = grid._normalizeBitPackdata(grid._VERSION_ROW, unnormalizedValues);
    	   
    	   // since there is no conversion for version,
    	   // verify the returned normalized values matches unnormalized array    	   
    	   isSameFunc(normalized, unnormalizedValues);
       });       
    	       
       //
	   // test cases for modulation data
	   //
       it("should be able to return normalized values for modulation data  ", function()
       {    	   
    	   
    	   var unnormalizedValues = ["QPSK", "771", "1/2", "IESS-208", "OS-73", 
    	                             "RS 126-112", "1450000", "on", "Modem Src", "RTS/CTS",
    	                             "1000"];
    	   var normalized = grid._normalizeBitPackdata(grid._MODULATOR_ROW, unnormalizedValues);
    	   
    	   // verify the returned normalized values matches the expected array
    	   var expected = ["QPSK", "771", "1/2", "IESS-208", "OS-73", 
    	                   "RS 126-112", "1450.00", "on", "Modem Src", "RTS/CTS", 
    	                   "100.0"]; 	   
    	   isSameFunc(normalized, expected);
       });  
       
       it("should be able to detect incomplete modulation data  ", function()
       {    	   
    	   var unnormalizedValues = ["QPSK", "771", "1/2"];
    	   var normalized = grid._normalizeBitPackdata(grid._MODULATOR_ROW, unnormalizedValues);
    	  
    	   // since we didn't pass in enough data, the returned normalized array should be the same
    	   // as the unnormalized one
    	   isSameFunc(normalized, unnormalizedValues);
       });  
    	       
       //
	   // test cases for demodulation data
	   //
       it("should be able to return normalized values for demodulation data  ", function()
       {    	   
    	   
    	   var unnormalizedValues = ["BPSK", "370288", "1/2", "IESS-208", "OS-73", "RS 126-112", "1450000", "on"];
    	   var normalized = grid._normalizeBitPackdata(grid._DEMODULATOR_ROW, unnormalizedValues);
    	   
    	   // verify the returned normalized values matches the expected array
    	   var expected = ["BPSK", "370288", "1/2", "IESS-208", "OS-73", "RS 126-112", "1450.00", "on"];
    	   isSameFunc(normalized, expected);
       });  
       
       it("should be able to detect incomplete demodulation data  ", function()
       {    	   
    	   var unnormalizedValues = ["BPSK", "370288", "1/2", "IESS-208"];
    	   var normalized = grid._normalizeBitPackdata(grid._DEMODULATOR_ROW, unnormalizedValues);
    	  
    	   // since we didn't pass in enough data, the returned normalized array should be the same
    	   // as the unnormalized one
    	   isSameFunc(normalized, unnormalizedValues);
       });  
   });

   
	
	/**
	 * testing function _getExpandedRows()
	 */
   describe("when validating ConfigurationGrid._rowIndexFromShortname", function() 
   {

	   var grid;
	   
	   beforeEach( function()
	   {
		   grid = linkabit.config.ConfigurationGrid({});    	   
       });

       it("should be able to return Terminal param row for the shortname of 'term'", function()
       {    	   
    	  var idx = grid._rowIndexFromShortname( linkabit.utils.Constants.CFG_TERM_PARAM_JSON_FLD);
    	  expect( idx ).toBe(   grid._TERMINAL_PARAM_ROW );   	   
       });

      
   });
   
   
});


