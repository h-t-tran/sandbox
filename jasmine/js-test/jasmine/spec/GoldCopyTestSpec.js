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

//
// this first describe() list the name of this JS file
//
describe("GoldCopyTestSpec", function() {
       
	//
	// this describe() specifies the method under test - in this case it is add()
    //
	describe("when validating MyClass.add", function() 
	{
	   	//
		// Each it() describes different test scenarios (happy path, negative path, etc) for the method.
		// 
		// the it() specifies the first test case for add() method.
		it("should be able to display success when 1+1=2", function()
		{
          expect(1+1).toEqual(2);
		});
       
		it("should be able to display success when 10*2=20", function()
		{
	         expect(10*2).toEqual(20); // this is successful
	         //expect(10).toEqual(20);  // this fails
		});
	});
   
	describe("when validating MyClass.substract", function() 
    {
        it("should be able to display success when verifying 1 != 2 ", function()
        {                          
           expect(1).not.toEqual(2);
        });
    });
});


