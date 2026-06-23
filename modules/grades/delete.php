<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);

if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(isset($_POST["id"]) && !empty($_POST["id"])){
        $sql = "DELETE FROM grades WHERE id = ?";
        
        if($stmt = mysqli_prepare($conn, $sql)){
            mysqli_stmt_bind_param($stmt, "i", $param_id);
            $param_id = $id;
            
            if(mysqli_stmt_execute($stmt)){
                header("location: list.php");
                exit();
            } else {
                echo "حدث خطأ أثناء حذف الدرجة. يرجى المحاولة مرة أخرى.";
            }
            mysqli_stmt_close($stmt);
        }
    }
    mysqli_close($conn);
} else {
    // التحقق من وجود الدرجة قبل عرض نموذج الحذف
    $sql = "SELECT g.*, s.name as student_name, c.name as course_name 
            FROM grades g 
            JOIN students s ON g.student_id = s.id 
            JOIN courses c ON g.course_id = c.id 
            WHERE g.id = ?";
            
    if($stmt = mysqli_prepare($conn, $sql)){
        mysqli_stmt_bind_param($stmt, "i", $param_id);
        $param_id = $id;
        
        if(mysqli_stmt_execute($stmt)){
            $result = mysqli_stmt_get_result($stmt);
            
            if(mysqli_num_rows($result) == 0){
                header("location: list.php");
                exit();
            }
        }
        mysqli_stmt_close($stmt);
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حذف الدرجة - نظام إدارة الدرجات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../style.css">
    <style>
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 0.7rem 1.3rem;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn:hover {
            background: var(--secondary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .btn-danger {
            background: var(--danger-color);
        }
        
        .btn-danger:hover {
            background: #d32f2f;
        }
        
        .btn-success {
            background: var(--success-color);
        }
        
        .btn-success:hover {
            background: #388e3c;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .alert {
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .alert-danger {
            background-color: rgba(231, 76, 60, 0.15);
            color: var(--danger-color);
            border: 1px solid rgba(231, 76, 60, 0.3);
        }
        
        .detail-box {
            background-color: #f9f9f9;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            text-align: right;
        }
        
        .detail-item {
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .detail-label {
            font-weight: 600;
            color: var(--dark-color);
        }
        
        .detail-value {
            color: var(--gray-color);
        }
        
        .form-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <header>
            <div class="header-content">
                <h1><i class="fas fa-graduation-cap"></i> نظام إدارة الدرجات</h1>
                <div class="user-info">
                    <span><i class="fas fa-user"></i> <?php echo $_SESSION["username"]; ?></span>
                    <a href="../../logout.php" class="logout-btn"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
                </div>
            </div>
            <nav>
                <a href="../../index.php"><i class="fas fa-home"></i> الرئيسية</a>
                <a href="../students/list.php"><i class="fas fa-user-graduate"></i> إدارة الطلاب</a>
                <a href="../courses/list.php"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="list.php" class="active"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="page-header">
                <h2><i class="fas fa-trash"></i> حذف الدرجة</h2>
                <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
            </div>
            
            <div class="card">
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>هل أنت متأكد من أنك تريد حذف هذه الدرجة؟</h3>
                </div>
                
                <?php
                $sql = "SELECT g.*, s.name as student_name, c.name as course_name 
                        FROM grades g 
                        JOIN students s ON g.student_id = s.id 
                        JOIN courses c ON g.course_id = c.id 
                        WHERE g.id = ?";
                if($stmt = mysqli_prepare($conn, $sql)){
                    mysqli_stmt_bind_param($stmt, "i", $param_id);
                    $param_id = $id;
                    
                    if(mysqli_stmt_execute($stmt)){
                        $result = mysqli_stmt_get_result($stmt);
                        
                        if(mysqli_num_rows($result) == 1){
                            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
                            
                            echo '<div class="detail-box">';
                            echo '<div class="detail-item"><span class="detail-label">الطالب:</span> <span class="detail-value">' . $row["student_name"] . '</span></div>';
                            echo '<div class="detail-item"><span class="detail-label">المادة:</span> <span class="detail-value">' . $row["course_name"] . '</span></div>';
                            echo '<div class="detail-item"><span class="detail-label">الدرجة:</span> <span class="detail-value">' . $row["grade"] . '</span></div>';
                            echo '<div class="detail-item"><span class="detail-label">الفصل الدراسي:</span> <span class="detail-value">' . $row["semester"] . '</span></div>';
                            echo '</div>';
                        }
                    }
                    mysqli_stmt_close($stmt);
                }
                mysqli_close($conn);
                ?>
                
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) . "?id=" . $id; ?>" method="POST">
                    <div class="form-actions">
                        <a href="list.php" class="btn btn-success"><i class="fas fa-times"></i> إلغاء</a>
                        <button type="submit" class="btn btn-danger"><i class="fas fa-trash"></i> نعم، احذف الدرجة</button>
                    </div>
                    <input type="hidden" name="id" value="<?php echo $id; ?>">
                </form>
            </div>
        </div>
    </div>
</body>
</html>