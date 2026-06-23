
<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);

$sql = "DELETE FROM students WHERE id = ?";
if($stmt = mysqli_prepare($conn, $sql)){
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $id;
    
    if(mysqli_stmt_execute($stmt)){
        header("location: list.php");
        exit();
    } else {
        echo "حدث خطأ أثناء حذف الطالب";
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
?>