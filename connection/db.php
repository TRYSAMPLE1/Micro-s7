

$conn = mysqli_connect("localhost","root","","databaseName");

if($conn === false){

    die("Connection error occurred".mysql_connect_error());


}else{

    echo "Database connected Succesfully";

}
