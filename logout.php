<?php
// بدء الجلسة فقط إذا لم تكن قد بدأت بالفعل
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$_SESSION = array();
session_destroy();
header("location: login.php");
exit;
?>