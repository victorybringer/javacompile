
<?php 

$s=file_get_contents("php://input");

$jsondata=json_decode($s);
$code=$jsondata->code; 
$partname=$jsondata->name; 
$fullname=$partname.".java"; 
$myfile = fopen($fullname, "w");

fwrite($myfile, $code);

exec("javac  ".$fullname."  2>&1",$out);

exec("rm ".$fullname);

if(count($out)!=0){
for($a=0;$a<count($out);$a++){
echo $out[$a]."\n";

}

}

else{
exec("java ".$partname."  2>&1",$out);

for($a=0;$a<count($out);$a++){
echo $out[$a]."\n";

}
exec("rm ".$partname.".class");
}
















?> 

