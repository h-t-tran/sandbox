<?php 

$data = array(
	  0=>array(
			"id"=> 10001,
			"name"=> "Acme corp2",
			"phone"=> "+52-01-55-4444-3210",
			"website"=> "www.acmecorp.com",
			"status"=> "Active",
			"clientSince"=> "2010-01-01 14:35", 
			"country"=>"USA", 
			"sendnews"=> true, 
			"employees"=>200, 
			"contractInfo"=>array(
				"id"=>444, 
				"contractId"=>"ct-001-444", 
				"documentType"=>"PDF" 
			)
	  ),
	  1=>array(
			"id"=> 10002,
			"name"=> "Candy Store LTD",
			"phone"=> "+52-01-66-3333-3895",
			"website"=> "www.candyworld.com",
			"status"=> "Inactive",
			"clientSince"=> "2011-01-01 14:35", 
			"country"=>"USA", 
			"sendnews"=> false, 
			"employees"=>75,				
			"contractInfo"=>array(
				"id"=>9998, 
				"contractId"=>"ct-001-9998", 
				"documentType"=>"DOC" 
			)
	  ),
	  2=>array(
			"id"=> 10003,
			"name"=> "Modern Cars of America",
			"phone"=> "+52-01-55-4444-8885",
			"website"=> "www.coolcars.com",
			"status"=> "Suspended",
			"clientSince"=> "2013-01-01 14:35", 
			"country"=>"Mexico", 
			"employees"=>100,
			"sendnews"=> true, 			
			"contractInfo"=>array(
				"id"=>10458, 
				"contractId"=>"ct-001-10458", 
				"documentType"=>"TXT" 
			)
		),
	   3=>array(
			"id"=> 10004,
			"name"=> "Extreme Sports Los Cabos",
			"phone"=> "+52-01-33-1234-2345",
			"website"=> "www.loscabosextremesports.com",
			"status"=> "Prospect",			
			"clientSince"=> "2014-01-01 14:35", 
			"country"=>"Mexico", 
			"employees"=>30,
			"sendnews"=> false, 						
			"contractInfo"=>array(
				"id"=>10666, 
				"contractId"=>"ct-001-10666", 
				"documentType"=>"PDF" 
			)
		),
	   4=>array(
			"id"=> 10005,
			"name"=> "Plastic toys MX",
			"phone"=> "+52-01-33-1234-2345",
			"website"=> "www.plastictoys.com.mx",
			"status"=> "Prospect",			
			"clientSince"=> "2014-01-01 14:35", 
			"country"=>"USA", 
			"employees"=>30,
			"sendnews"=> false, 						
			"contractInfo"=>array(
				"id"=>106999, 
				"contractId"=>"ct-001-106999", 
				"documentType"=>"PDF" 
			)
		),
	   5=>array(
			"id"=> 10006,
			"name"=> "Chinese food Western",
			"phone"=> "+52-01-33-1234-2345",
			"website"=> "www.chinafoodexpress.com",
			"status"=> "Prospect",			
			"clientSince"=> "2014-01-01 14:35", 
			"country"=>"USA", 
			"employees"=>30,
			"sendnews"=> false, 						
			"contractInfo"=>array(
				"id"=>10777, 
				"contractId"=>"ct-001-10777", 
				"documentType"=>"PDF" 
			)
		)
); 

	$page  = $_POST['page']; 	
	$Init  = (intval($_POST['page']) * 3 - 3 ); 	
	$end   =  $Init + 3;	 
	$dataUse = array(); 
	
	for ($i=$Init;$i<$end;$i++){		
 		$dataUse[] = $data[$i]; 		
	}
	echo json_encode( 
		array(
			'success'=>true,
			'total'=>count($data), 
			'records'=>$dataUse
		)
	);

?>