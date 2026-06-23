<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);

$sql = "DELETE FROM courses WHERE id = ?";
if($stmt = mysqli_prepare($conn, $sql)){
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $id;
    
    if(mysqli_stmt_execute($stmt)){
        $_SESSION['success_message'] = "تم حذف المادة بنجاح.";
        header("location: list.php");
        exit();
    } else{
        echo "حدث خطأ أثناء حذف المادة";
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
?>