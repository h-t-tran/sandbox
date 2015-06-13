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
// Unit test for linkabit.utils.utils.js
/////////////////////////////////////

describe("UtilsSpec", function() {
        
	
	/**
	 * testing function getURLParameter()
	 */
   describe("when validating Utils.getURLParameter", function() 
   {

       it("should be able to extract a valid modemIP param.  ", function()
       {    	   
    	   
    	  var url = 'http://san-eng-15:8090/HciWeb/HciApp.html?modemip=111.22.3.4';
    	  var val = linkabit.utils.Utils.getURLParameter(url, 'modemip');    	 
    	  expect(val).toEqual('111.22.3.4');

       });

       it("should be able to handle non existing param.  ", function()
       {
    	  var url = 'http://san-eng-15:8090/HciWeb/HciApp.html';
    	  var val = linkabit.utils.Utils.getURLParameter(url, 'modemip');    	 
    	  expect(val).toBeNull();
       });
   });
   
   
   /**
	 * testing function sendResetErrorStatAjax()
	 */
  describe("when validating Utils.sendResetErrorStatAjax", function() 
  {

      it("should be able to invoke success callback  ", function()
      {
   	   
   	    var successCallBack = jasmine.createSpy();
   	   
  		// mock the dojo.xhrGet()
		spyOn(dojo, "xhrGet")
			.andCallFake(function(obj)
					{
						// in the mock function, we invoke the load() to simulate
						// a successful ajax.  				
						//console.debug("xhrGetFake arguments ", arguments);
						obj.load("success");						
					});
				
		var url = 'http://anything.com';
		// call the real function.
		linkabit.utils.Utils.sendResetErrorStatAjax(url,successCallBack);	
		
		// verify the sendResetErrorStatAjax() function invokes the successCallBack object
		// at least once
		expect(successCallBack).toHaveBeenCalled();
		//expect(successCallBack).not.toHaveBeenCalled()
      });
      
      it("should not invoke success callback since we simulate error ", function()
    	      {
    	   	   
    	   	    var successCallBack = jasmine.createSpy();
    	   	   
    	  		// mock the dojo.xhrGet()
    			spyOn(dojo, "xhrGet")
    				.andCallFake(function(obj)
    						{
    							// in the mock function, we invoke the error() 
    							obj.error("error");						
    						});
    					
    			var url = 'http://anything.com';
    			// call the real function.
    			linkabit.utils.Utils.sendResetErrorStatAjax(url,successCallBack);	

    			expect(successCallBack).not.toHaveBeenCalled()
    	      });
  });
  
  
	  /**
		 * testing function calcDateDelta()
		 */
	 describe("when validating Utils.calcDateDelta", function() 
	 {
	
	     it("should be able to return Date in the past", function()
	     {
	    	 var currDate = new Date(2011, 1, 2, 10, 11, 12);
	    	
	    	 var newDate = linkabit.utils.Utils.calcDateDelta(currDate, -1, -1,-1,-1);
	    	 
	    	 // year stays the same
	    	 expect(newDate.getFullYear()).toEqual(2011);
	    	 expect(newDate.getMonth()).toEqual(1);
	    	 expect(newDate.getDate()).toEqual(1); // should be the 1st day since it was the 2nd in base date
	    	 expect(newDate.getHours()).toEqual(9);  // 1 less than the base
	    	 expect(newDate.getMinutes()).toEqual(10); // 1 less than the base
	    	 expect(newDate.getSeconds()).toEqual(11); // 1 less than the base
	     });
	     
	     it("should be able to return Date in the past with input of -25 hrs", function()
	     {
	    	 var currDate = new Date(2011, 1, 2, 10, 11, 12);
	    	
	    	 // we pass in -25 hrs with is the same as -1 day and -1 hr
	    	 var newDate = linkabit.utils.Utils.calcDateDelta(currDate, 0, -25,-1,-1);
	    	 
	    	 // year stays the same
	    	 expect(newDate.getFullYear()).toEqual(2011);
	    	 expect(newDate.getMonth()).toEqual(1);
	    	 expect(newDate.getDate()).toEqual(1); // should be 1 since 25 hrs is more than 1 day.
	    	 expect(newDate.getHours()).toEqual(9);  // 1 less than the base
	    	 expect(newDate.getMinutes()).toEqual(10); // 1 less than the base
	    	 expect(newDate.getSeconds()).toEqual(11); // 1 less than the base
	     });
	    
	     it("should be able to return Date in the past with input of -25 hrs", function()
	     {
	    	 var currDate = new Date(2011, 5, 20, 10, 11, 12);
	    	
	    	 // we pass in -40 days which is to reduce the date by at least 1 month
	    	 var newDate = linkabit.utils.Utils.calcDateDelta(currDate, -40, -1, 0, 0);
	    	 
	    	 // the month will have to be decrease by 1
	    	 expect(newDate.getMonth()).toEqual(4);
	    	 expect(newDate.getDate()).toEqual(11);
	    	 expect(newDate.getHours()).toEqual(9);  // 1 less than the base
	    	 expect(newDate.getMinutes()).toEqual(11); // min stays the same
	    	 expect(newDate.getSeconds()).toEqual(12); // sec stays the same

	     });
	     
		 it("should be able to return Date in the future with input of +25 hrs", function()
	     {
	    	 var currDate = new Date(2011, 1, 2, 10, 11, 12);
	    	
	    	 // we pass in -25 hrs with is the same as +1 day and +1 hr
	    	 var newDate = linkabit.utils.Utils.calcDateDelta(currDate, 0, +25, +1, +1);
	    	 
	    	 // year stays the same
	    	 expect(newDate.getFullYear()).toEqual(2011);
	    	 expect(newDate.getMonth()).toEqual(1);
	    	 expect(newDate.getDate()).toEqual(3); // should be 1 more day since 25 hrs
	    	 expect(newDate.getHours()).toEqual(11);  // 1 more than the base
	    	 expect(newDate.getMinutes()).toEqual(12); // 1 more than the base
	    	 expect(newDate.getSeconds()).toEqual(13); // 1 more than the base
	     });
	 });

  
	/**
	 * testing function generateAjaxUrl()
	 */
	  describe("when validating linkabit.utils.Utils.generateAjaxUrl", function() 
	  {
	
	      it("should be able to generate a correct url for the ajax request ", function()
	      {
		   	  var val = linkabit.utils.Utils.generateAjaxUrl("san-eng-15:8090");    	 
		   	  expect(val).toEqual('http://san-eng-15:8090/HciWeb/ActionDispatcherServlet');
	
	      });
	
	  });
   
		/**
		 * testing function generateBaseUrl()
		 */
	  describe("when validating linkabit.utils.Utils.generateBaseUrl", function() 
	  {
	
	      it("should be able to generate a correct url for the base http request ", function()
	      {
		   	  var val = linkabit.utils.Utils.generateBaseUrl("san-eng-15:8090");    	 
		   	  expect(val).toEqual('http://san-eng-15:8090/HciWeb');
	
	      });
	
	  });
   
	   /**
		 * testing function formatThousandthScale()
		 */
	  describe("when validating Utils.formatThousandthScale", function() 
	  {
	
	      it("should be able to convert '1234' string to 1.234", function()
	      {
		   	 
	    	  // we strip off the 4 since it's the 2nd decimal place
		   	  var val = linkabit.utils.Utils.formatThousandthScale("1234");    	 
		   	  expect(val).toEqual(1.234);
	
	      });
	
	      it("should be able to convert 1234 number to 1.234", function()
	      {
	    	 // we strip off the 4 since it's the 2nd decimal place
		   	  var val = linkabit.utils.Utils.formatThousandthScale(1234);    	 
		   	  expect(val).toEqual(1.234);
	
	      });
	  });

	  
	   /**
		 * testing function formatHundredthScale()
		 */
	  describe("when validating Utils.formatHundredthScale", function() 
	  {
	
	      it("should be able to convert '1234' string to 12,34", function()
	      {
		   	 
	    	  // we strip off the 4 since it's the 2nd decimal place
		   	  var val = linkabit.utils.Utils.formatHundredthScale("1234");    	 
		   	  expect(val).toEqual(12.34);
	
	      });
	
	      it("should be able to convert 1234 number to 12.34", function()
	      {
	    	 // we strip off the 4 since it's the 2nd decimal place
		   	  var val = linkabit.utils.Utils.formatHundredthScale(1234);    	 
		   	  expect(val).toEqual(12.34);
	
	      });
	  });
  
  
  
		  /**
			 * testing function formatTenthScale()
			 */
		 describe("when validating Utils.formatTenthScale", function() 
		 {
		
		     it("should be able to convert '1234' string to 123.4", function()
		     {
			   	 
			   	  var val = linkabit.utils.Utils.formatTenthScale("1234");    	 
			   	  expect(val).toEqual(123.4);
		
		     });
		
		     it("should be able to convert 1234 number to 123.4", function()
		     {
			   	 
			   	  var val = linkabit.utils.Utils.formatTenthScale(1234);    	 
			   	  expect(val).toEqual(123.4);
		
		     });
		 });
   
		/**
		 * testing function Utils.normalizeDashboardData()
		 */
       describe("when validating Utils.normalizeDashboardData", function() 
       {
    	   /**
    	    * test case 1 - verifying string conversion to number is good
    	    */
           it("should be able to convert uptime, error %, temperature, rx, tx rate, numalarms from string to number.  ", function()
           {
        	  var ajaxPayload = 
        	  {
        			  upTime: 		"123",
        			  errorPercent: "12.3", 
        			  txRatekbps:  "1.23",
        			  rxRatekbps:  "4.56",
        			  numAlarms : "99"	  
        	  };
        	  
        	  var result = linkabit.utils.Utils.normalizeDashboardData(ajaxPayload);
        	  //console.debug("result", result);
        	  
        	  expect(result.upTime).toEqual(123);
        	  expect(result.errorPercent).toEqual(12.3);
        	  expect(result.txRatekbps).toEqual(1.23);              
        	  expect(result.rxRatekbps).toEqual(4.56);
        	  expect(result.numAlarms).toEqual(99);
              
           });
           
         
       			
           /**
    	    * test case2 - verifying string conversion to boolean is good
    	    */
           it("should be able to convert rxEnabled, txEnabled, transecEnabled from string to boolean.  ", function()
           {
        	  var ajaxPayload = 
        	  {
        			  rxEnabled: 		"true",
        			  txEnabled: 		"false",
        			  transecEnabled:	"false"
        	  };
        	  
        	  var result = linkabit.utils.Utils.normalizeDashboardData(ajaxPayload);
        	  
        	  expect(result.rxEnabled).toEqual(true);
        	  expect(result.txEnabled).toEqual(false);
        	  expect(result.transecEnabled).toEqual(false);              

              
           });
           
       });
       
       /**
       * test linkabit.utils.Utils.bpsToKbps function that convert the bps to kbps correctly
       */
      describe("when validating linkabit.utils.Utils.bpsToKbps", function() 
      {      
    	  	it("should be able to detect an input of string", function()
           {
    	  		expect( linkabit.utils.Utils.bpsToKbps( "123456" ) )
    	  				.toEqual(123.5); 
              
           });
 	   	  	
    	  	
    	  	it("should be able to detect an input of a number", function()
    	            {
    	     	  		expect( linkabit.utils.Utils.bpsToKbps( 123456 ) )
    	     	  				.toEqual(123.5); 
    	               
    	            });
      });
       
      
      /**
       * test the conversion of bit packing of this format
       *  " id|timestamp|desc|type|archive"
       *  to make sure we can create the data correctly.
       *  
       *  sample test data: "1|1390438409785|low mem 1|1|1|" or
       *  					"1|Wed Jan 22, 2014|low mem 1|1|1|"
       *  
       *  
       */
     describe("when validating Utils.bitPackToEventData", function() 
     {      
   	  it("should be able to convert each | deliminated fields into a JS object", function()
      {
   		  
   		  var bitStr = "1|123456789|low mem 1|2|3|";   		     		 
   		  var eventData = linkabit.utils.Utils.bitPackToEventData(bitStr);

		
       	  // we want to test both the indexing of property or using the property directly.
       	  expect(eventData[ linkabit.utils.Constants.EVENT_ID]).toEqual(1);
       	  
       	  // the time is treated as string.
       	  expect(eventData[ linkabit.utils.Constants.EVENT_TIMESTAMP]).toEqual("123456789");
       	  expect(eventData[ linkabit.utils.Constants.EVENT_DESC]).toEqual("low mem 1");
       	  expect(eventData[ linkabit.utils.Constants.EVENT_TYPE]).toEqual(2);
       	  expect(eventData[ linkabit.utils.Constants.EVENT_ARCHIVE]).toEqual(3);
           
      });
   	  
   	  
   	  it("should be return an empty object when not enough fields in the bit pack string", function()
          {
	   		  // this data string does not have enough fields
	   		  var bitStr = "1|1390438409785";
	   		      		  
	   		  var eventData = linkabit.utils.Utils.bitPackToEventData(bitStr);

	   		  // all properties should not exist.
	   		  expect(eventData[ linkabit.utils.Constants.EVENT_ID]).toBeUndefined();
	   		  expect(eventData[ linkabit.utils.Constants.EVENT_TIMESTAMP]).toBeUndefined(); 
	       	  expect( linkabit.utils.Utils.isObjEmpty(eventData) ).toEqual(true);
          });
     }); 
       /**
        * test the conversion of bit packing of this format
        *  "mnemonic|modem status |login status|mode |transec enabled|temperature|num alarm|error|rx rate|tx rate|uptime"
        *  to make sure we can create the data correctly.
        *  
        *  sample test data: "NC10|2|1|Net Controller|true|28|4|21.1|204.0|134.0|1684"
        *  
        *  
        */
      describe("when validating Utils.bitPackToDashboardData", function() 
      {      
    	  it("should be able to convert each | deliminated fields into a JS object", function()
           {
    		  // this test string read as follow:
    		  // node mnemonic = "NC10"
    		  // modem status = 2 (initializing)
    		  // login status = 1 (login)
    		  // mode = "Net Controller"
    		  // transec enabled = true
    		  // temperature = 28 deg C
    		  // num alarms = 4
    		  // error = 21.0 % (this is in 0.1 scale)
    		  // rx rate = 204000 bps
    		  // tx rate = 134000 bps
    		  // time = number of sec since modem starts.
    		  // bw usage = 12.3%
    		  var bitStr = "NC10|2|1|Net Controller|true|28|4|211|204000|134000|1684|123";
    		  
    		  
    		  var dashboardData = linkabit.utils.Utils.bitPackToDashboardData(bitStr);
        	  console.debug("*** dashboardData ", dashboardData);
        	  
    		  // dashboardData should now have the following properties
//    		  linkabit.utils.Constants.NODE_MNEMONIC 		= "nodeMnemonic";
//    		  linkabit.utils.Constants.MODE 				= "mode";
//    		  linkabit.utils.Constants.UPTIME 			= "upTime";
//    		  linkabit.utils.Constants.RX_ENABLED			= "rxEnabled";
//    		  linkabit.utils.Constants.TX_ENABLED			= "txEnabled";
//    		  linkabit.utils.Constants.TRANSEC_ENABLED	= "transecEnabled";
//    		  linkabit.utils.Constants.MODEM_LED_STATUS	= "modemLedStatus";
//    		  linkabit.utils.Constants.LOGIN_LED_STATUS	= "loginLedStatus";
//    		  linkabit.utils.Constants.LOGIN_STATE		= "loginState";
//    		  linkabit.utils.Constants.MODEM_STATE		= "modemState";
//    		  linkabit.utils.Constants.NUM_ALARMS			= "numAlarms";
//    		  linkabit.utils.Constants.ERROR_PERCENTAGE	= "errorPercent";
//    		  linkabit.utils.Constants.TX_RATE_KBPS		= "txRatekbps";
//    		  linkabit.utils.Constants.RX_RATE_KBPS		= "rxRatekbps";
//    		  linkabit.utils.Constants.TEMPERATURE		= "temperature";
    		  
        	  // we want to test both the indexing of property or using the property directly.
        	  expect(dashboardData[ linkabit.utils.Constants.NODE_MNEMONIC]).toEqual("NC10");
        	  expect(dashboardData.modemLedStatus).toEqual( linkabit.widgets.LedWidget.WARN );        	  
        	  expect(dashboardData.loginLedStatus).toEqual( linkabit.widgets.LedWidget.SUCCESS );
        	  expect(dashboardData.mode).toEqual( "Net Controller" );
        	  expect(dashboardData.transecEnabled).toEqual( true );
        	  expect(dashboardData.temperature).toEqual( 28 );
        	  expect(dashboardData.numAlarms ).toEqual( 4 );
        	  expect(dashboardData.errorPercent ).toEqual( 21.1 );
        	  expect(dashboardData.rxRatekbps ).toEqual( 204 );
        	  expect(dashboardData.txRatekbps ).toEqual( 134 );
        	  expect(dashboardData.upTime).toEqual(1684);
        	  expect(dashboardData.bwUsage).toEqual(12.3);
        	  
        	  // now test the derived properties
        	  
        	  expect(dashboardData.loginState ).toEqual( linkabit.utils.Constants.LOGIN  );
        	  expect(dashboardData.modemState ).toEqual( linkabit.utils.Constants.INITIALIZING );
        	  expect(dashboardData.rxEnabled ).toEqual( true ); // true b/c rx rate > 0
        	  expect(dashboardData.txEnabled ).toEqual( true ); // true b/c tx rate > 0
        	  
              
           });
    	  
    	  
    	  it("should be able to derive rx and tx enable state to 'false' when rx and tx rate are 0", function()
           {
    		  // this test string read as follow:
    		  // node mnemonic = "NC10"
    		  // modem status = 2 (initializing)
    		  // login status = 1 (login)
    		  // mode = "Net Controller"
    		  // transec enabled = true
    		  // temperature = 28 deg C
    		  // num alarms = 4
    		  // error = 21.0 %
    		  // rx rate = 0 kbps
    		  // tx rate = 0 kbps
    		  // time = number of sec since modem starts.
    		  // bw usage percent = 12.3%
    		  var bitStr = "NC10|2|1|Net Controller|true|28|4|21.1|0|0|1684|123";
    		      		  
    		  var dashboardData = linkabit.utils.Utils.bitPackToDashboardData(bitStr);
        	  
        	  // now test the derived properties    	        	  
        	  expect(dashboardData.rxEnabled ).toEqual( false ); // true b/c rx rate = 0
        	  expect(dashboardData.txEnabled ).toEqual( false ); // true b/c tx rate = 0              
           });
    	  
    	  it("should be return an empty object when not enough fields in the bit pack string", function()
           {
    		  // this data string does not have enough fields
    		  var bitStr = "NC10|2|1|Net Controller|true|28|4|21.1";
    		      		  
    		  var dashboardData = linkabit.utils.Utils.bitPackToDashboardData(bitStr);

    		  // all properties should not exist.
        	  expect(dashboardData.nodeMnemonic).toBeUndefined();
        	  expect(dashboardData.modemLedStatus).toBeUndefined(); 
        	  expect( linkabit.utils.Utils.isObjEmpty(dashboardData) ).toEqual(true);
           });
      });
       
      
      /**
       * test the conversion of bit packing of this format which represents a network member
       * See the ICD or  linkabit.utils.Utils.bitPackToNetMemData on how to decode the
       * bitpack string.
       *  sample test data: "0|NC|Terminal NC0|159.0.1.0|144|true|true|2310|240|490|330|90|5440|4490|2640|832|349|1234|5678|"
       *  
       *  
       */
     describe("when validating linkabit.utils.Utils.bitPackToNetMemData", function() 
     {      

   	  
   	  it("should be able decode a correct bitpack string", function()
          {
   		  	// the bitpack string which represent a netmember is decoded as
   		  	// "0|NC|Terminal NC0|159.0.1.0|144|true|true|2310|240|490|330|90|5440|4490|2640|832|349|1234|5678|"
            //
   		    //
   		  
			//   		id "0"
			//   		type "NC"
			//   		name "Terminal NC0"   		  
			//   		ipAddress "159.0.1.0"	
			//   		handoverRank "144" 
			
   		    //   		isNccCapable "true"
			//   		hubAssist "true"
			//   		rxdatarate "2310"
			//   		txdatarate "240"
			//   		upLinkLost "490"
   		  	
   		    //   		dnLinkLost "330"   		  
   		  	// 			arowCrcErrors "90"   		  
			//   		arowMissed "5440"	
			//   		dcomCrcErrors "4490"	
			//   		dcomMissed "2640"
			
   		    //   		peakTxEirp 83.2	
			//   		peakRxCno 34.9
   		    //			arowTotal 1234
   		  	// 			dcomTotal 5678


   		    var netMem = linkabit.utils.Utils.bitPackToNetMemData(
   					"0|NC|Terminal NC0|159.0.1.0|144|true|true|2310|240|491|330|90|5440|4490|2640|832|349|1234|5678|");
   		    console.debug("netMem ", netMem);
   		    expect(netMem.id ).toEqual( 0 );
   		    expect(netMem.type ).toEqual( "NC" );
	   		expect(netMem.name ).toEqual("Terminal NC0"  );
	   		expect(netMem.ipAddress ).toEqual( "159.0.1.0" );	   		
	   		expect(netMem.handoverRank ).toEqual( 144 );
	   		
	   		expect(netMem.isNccCapable ).toEqual( true );
	   		expect(netMem.hubAssist ).toEqual( true );
	   		expect(netMem.rxdatarate ).toEqual( 2.310 );
	   		expect(netMem.txdatarate ).toEqual( 0.240 );	   		
	   		expect(netMem.upLinkLost ).toEqual( 49.1 );	  // the lost is in 0.1 dbw scale.
	   		
	   		expect(netMem.dnLinkLost ).toEqual(  33.0 );
	   		expect(netMem.arowCrcErrors ).toEqual( 90 );
	   		expect(netMem.arowMissed ).toEqual( 5440 );
	   		expect(netMem.dcomCrcErrors ).toEqual( 4490 );
	   		expect(netMem.dcomMissed ).toEqual( 2640 );
	   		
	   		expect(netMem.peakTxEirp ).toEqual( 83.2 );
	   		expect(netMem.peakRxCno ).toEqual( 34.9 );
	   		expect(netMem.arowTotal ).toEqual( 1234 );
	   		expect(netMem.dcomTotal ).toEqual( 5678 );
	           
          });
   	  
   	  it("should be return an empty object when not enough fields in the bit pack string", function()
          {
 		    var netMem = linkabit.utils.Utils.bitPackToNetMemData(
				"0|NC|Terminal NC0|159.0.1.0|");
 		   
 		    // randomly verify a few properties are undefined
 		    expect(netMem.id).toBeUndefined();
    	    expect(netMem.peakTxEirp).toBeUndefined(); 

          });
     });
      
      
      /**
       * test the conversion of bit packing of this format
       *  "mnemonic|modem status |login status|mode |transec enabled|temperature|num alarm|error|rx rate|tx rate|uptime"
       *  to make sure we can create the data correctly.
       *  
       *  sample test data: "NC10|2|1|Net Controller|true|28|4|21.1|204.0|134.0|1684"
       *  
       *  
       */
     describe("when validating linkabit.utils.Utils.strToBoolean", function() 
     {      
   	  	  it("should be able to convert 'true' to true", function()
          {
   	  		expect( linkabit.utils.Utils.strToBoolean( "true") ).toEqual(true);   	  		
          });
   	  	  it("should be able to convert 'false' to false", function()
   	           {
   	    	  		expect( linkabit.utils.Utils.strToBoolean( "false") ).toEqual(false);   	  		
   	           });
   	  	  it("should be able to convert 'garbage' to false", function()
   	           {
   	    	  		expect( linkabit.utils.Utils.strToBoolean( "garbage") ).toEqual(false);   	  		
   	           });
     });
      
     /**
      * test isObjEmpty function
      */
     describe("when validating linkabit.utils.Utils.isObjEmpty", function() 
     {      
   	  	it("should be able to detect undefined to be an empty object", function()
          {
   	  		expect( linkabit.utils.Utils.isObjEmpty() ).toEqual(true); 
             
          });

   	  	it("should be able to detect null to be an empty object", function()
	      {
	  		expect( linkabit.utils.Utils.isObjEmpty(null) ).toEqual(true); 
	         
	      });
   	  	it("should be able to detect a true empty object", function()
          {
   	  		expect( linkabit.utils.Utils.isObjEmpty( {} ) ).toEqual(true); 
             
          });   
   	  	it("should be able to detect a non-empty object", function()
          {
   	  		expect( linkabit.utils.Utils.isObjEmpty( { prop1: 123} ) ).toEqual(false); 
             
          });   	   	  	
     });
     
     
     /**
      * test bitToLedString function that convert the approviate string "1", "2", "3", etc to valid
      * string the LedWidget can understand.
      */
     describe("when validating linkabit.utils.Utils.bitToLedString", function() 
     {      
   	  	it("should be able to detect a '1' as a success", function()
          {
   	  		expect( linkabit.utils.Utils.bitToLedString( linkabit.utils.Constants.SUCCESS_LED_STATE ) )
   	  				.toEqual(linkabit.widgets.LedWidget.SUCCESS); 
             
          });
	   	  	
   	  	it("should be able to detect a '2' as a warn", function()
   	          {
   	   	  		expect( linkabit.utils.Utils.bitToLedString( linkabit.utils.Constants.WARN_LED_STATE) )
   	   	  				.toEqual(linkabit.widgets.LedWidget.WARN); 
   	             
   	          });
   	  	it("should be able to detect a '3' as a error", function()
   	          {
   	   	  		expect( linkabit.utils.Utils.bitToLedString( linkabit.utils.Constants.ERROR_LED_STATE ) )
   	   	  				.toEqual(linkabit.widgets.LedWidget.ERROR); 
   	             
   	          });
   	  	it("should be able to detect an invalid string '9' as INACTIVE", function()
   	          {
   	   	  		expect( linkabit.utils.Utils.bitToLedString( "9" ) )
   	   	  				.toEqual(linkabit.widgets.LedWidget.INACTIVE); 
   	             
   	          });
     });
     
     /**
      * test isObjEmpty function
      */
     describe("when validating linkabit.utils.Utils.normalizeDashboardData", function() 
     {      
   	  	  it("should be able to detect if bitPacking is necessary", function()
	      {
	  		  var obj = { "bitpack": "NC10|2|1|Net Controller|true|28|4|21.0|204.0|134.0|1684|123"};
	  		  
	  		  var dashboardData = linkabit.utils.Utils.normalizeDashboardData( obj );
	  		
	  		  // bit the bitpack logic is working, the returned data will contain "NC10"
   	  		  expect( dashboardData.nodeMnemonic ).toEqual("NC10"); 
	         
	      });
   	  	  
   	  	  /**
   	  	   * this test case is to handle some legacy code we use when the data come from server is real JSON
   	  	   * and it is not efficient as bit packing
   	  	   */
   	  	it("should be able to detect if bitPacking is NOT necessary", function()
	      {
   	  		  // create an object that does not have the 'bitpack' property so we can bypass the bitpacking logic
	  		  var obj = {'errorPercent':'10.0',
	  				  	'loginLedStatus':'error',
	  				  	'loginState':'Logged out',
	  				  	'mode':'--',
	  				  	'modemLedStatus':'success',
	  				  	'modemState':'Operational',
	  				  	'nodeMnemonic':'NT-15',
	  				  	'numAlarms':"129", // represent as string instead of number to test this case
	  				  	'rxEnabled':true,
	  				  	'rxRatekbps':"100.3",   // represent as string instead of number to test this case
	  				  	'temperature':"80", // represent as string instead of number to test this case
	  				  	'transecEnabled':true,
	  				  	'txEnabled':false,
	  				  	'txRatekbps':200.5,
	  				  	'upTime':"36"
	  				  	};
  		  
	  		  var dashboardData = linkabit.utils.Utils.normalizeDashboardData( obj );
	  		
	  		  console.debug("Calling normalize dashboardData ", dashboardData);	
	  		
	  		  // bit the bitpack logic is working, the returned data will contain "NC10"
   	  		  expect( dashboardData.nodeMnemonic ).toEqual("NT-15"); 
   	  		  expect( dashboardData.numAlarms ).toEqual(129); 	         
   	  		  expect( dashboardData.rxRatekbps ).toEqual(100.3);
   	  		  expect( dashboardData.txRatekbps ).toEqual(200.5);
   	  		  expect( dashboardData.upTime ).toEqual(36);
   	        
	      });
   	  	  
   	  	
   	  	 	  	
     });
    

});


