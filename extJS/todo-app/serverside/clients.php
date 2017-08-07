<?php 
	$success= true; 
	$total  = 2000; 	
	$page   = $_GET['page']; 
	$start  = $_GET['start']; 
	$limit  = $_GET['limit']; 
	$datause = array(); 
	for ( $i= ($start +1); $i<= ( $start + $limit ); $i++ ){ 	
		$datause[] = array(
			'id'=> $i, 
			'name'=> 'name ' . $i,
			'lastname'=> 'lastname ' . $i
		);	
	} 
	echo json_encode( 
		array(
			'success'=>$success,
			'total'=>$total,
			'records'=>$datause
		) 
	);
?>