<?php
 $username = 'joesmith';
 $password = 'mypassword';
 $database = 'testdb';
 $server = 'dbtest.com';
error_reporting(0);
function parseLocation(){
$radius = $_GET['radius'];
if (!$radius) $radius = 200;
$bbox = $_GET['BBOX'];
$bbox = split(",",$bbox);
$west = $bbox[0];
$south = $bbox[1];
$east = $bbox[2];
$north = $bbox[3];
$center_lat = (($north - $south)/2) + $south;
$center_lng = (($east - $west)/2) + $east;
$location = array("center_lat"=>$center_lat,
"center_lng"=>$center_lng,"radius"=>$radius);
return $location;
}
$location = parseLocation();
$center_lat = $location['center_lat'];
$center_lng = $location['center_lng'];
$radius = $location['radius'];
// Start XML file, create parent node
$dom = new DOMDocument("1.0");
$node = $dom->createElement("kml");
$kmlnode = $dom->appendChild($node);
$foldernode = $dom->createElement("Folder");
$parnode = $kmlnode->appendChild($foldernode);
$opennode = $dom->createElement("open","1");
$parnode->appendChild($opennode);
// Opens a connection to a mySQL server
$connection=mysql_connect($server, $username, $password);
if (!$connection) {
die("Not connected : " . mysql_error());
}
// Set the active mySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
die ("Can\'t use db : " . mysql_error());
}
// Search the rows in the markers table
$query = "SELECT address, name, lat, lng, ( 3959 * acos( cos("
."radians(".$center_lat.") ) * cos( radians( lat ) ) * cos( radians( lng )"
."- radians(" . $center_lng . ") ) + sin( radians(".$center_lat.") ) *"
."sin( radians( lat ) ) ) ) AS distance FROM markers HAVING distance < "
.$radius. " ORDER BY distance LIMIT 0 , 20";
$result = mysql_query($query);
if (!$result) {
die("Invalid query: " . mysql_error());
}
//header("Content-type: application/vnd.google-earth.kml+xml");
// Iterate through the rows, adding XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
$node = $dom->createElement("Placemark");
$placenode = $parnode->appendChild($node);
$namenode = $dom->createElement("name",htmlentities ($row['name']));
$placenode->appendChild($namenode);
$descriptioncdata = $dom->createCDATASection("<b>Address:</b> " .
$row['address'] ."<br/><b>Distance:</b> " . $row['distance']);
$descriptionnode=$dom->createElement("description");
$descriptionnode->appendChild($descriptioncdata);
$placenode->appendChild($descriptionnode);
$coor = $row['lng'] . "," . $row['lat'];
$pointnode = $dom->createElement("Point");
$placenode->appendChild($pointnode);
$coornode = $dom->createElement("coordinates", $coor);
$pointnode->appendChild($coornode);
}
echo $dom->saveXML();
?>