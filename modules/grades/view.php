<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);
$grade_data = array();

$sql = "SELECT g.*, s.name as student_name, s.email as student_email, 
               c.name as course_name, c.instructor as course_instructor 
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
            $grade_data = mysqli_fetch_array($result, MYSQLI_ASSOC);
        } else {
            header("location: list.php");
            exit();
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عرض الدرجة - نظام إدارة الدرجات</title>
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
        }
        
        .detail-row {
            display: flex;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .detail-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .detail-label {
            flex: 0 0 200px;
            font-weight: 600;
            color: var(--dark-color);
        }
        
        .detail-value {
            flex: 1;
            color: var(--gray-color);
        }
        
        .grade-circle {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 0 auto;
            border: 8px solid;
        }
        
        .grade-excellent {
            color: var(--success-color);
            border-color: rgba(39, 174, 96, 0.2);
        }
        
        .grade-very-good {
            color: #27ae60;
            border-color: rgba(39, 174, 96, 0.2);
        }
        
        .grade-good {
            color: #f39c12;
            border-color: rgba(243, 156, 18, 0.2);
        }
        
        .grade-pass {
            color: #e67e22;
            border-color: rgba(230, 126, 34, 0.2);
        }
        
        .grade-fail {
            color: var(--danger-color);
            border-color: rgba(231, 76, 60, 0.2);
        }
        
        .grade-status {
            text-align: center;
            margin-top: 1rem;
            font-weight: 600;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .card-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--dark-color);
            margin: 0;
        }
        
        @media (max-width: 768px) {
            .detail-row {
                flex-direction: column;
            }
            
            .detail-label {
                flex: 0 0 100%;
                margin-bottom: 0.5rem;
            }
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
                <h2><i class="fas fa-eye"></i> عرض الدرجة</h2>
                <div>
                    <a href="edit.php?id=<?php echo $id; ?>" class="btn btn-success"><i class="fas fa-edit"></i> تعديل</a>
                    <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">تفاصيل الدرجة</h3>
                    <div class="grade-circle 
                        <?php 
                        if($grade_data['grade'] >= 90) echo 'grade-excellent';
                        elseif($grade_data['grade'] >= 80) echo 'grade-very-good';
                        elseif($grade_data['grade'] >= 70) echo 'grade-good';
                        elseif($grade_data['grade'] >= 60) echo 'grade-pass';
                        else echo 'grade-fail';
                        ?>">
                        <?php echo $grade_data['grade']; ?>
                    </div>
                </div>
                
                <div class="grade-status">
                    <?php 
                    if($grade_data['grade'] >= 90) echo 'امتياز';
                    elseif($grade_data['grade'] >= 80) echo 'جيد جداً';
                    elseif($grade_data['grade'] >= 70) echo 'جيد';
                    elseif($grade_data['grade'] >= 60) echo 'مقبول';
                    else echo 'راسب';
                    ?>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">الطالب:</div>
                    <div class="detail-value"><?php echo $grade_data['student_name']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">البريد الإلكتروني:</div>
                    <div class="detail-value"><?php echo $grade_data['student_email']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">المادة:</div>
                    <div class="detail-value"><?php echo $grade_data['course_name']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">المحاضر:</div>
                    <div class="detail-value"><?php echo $grade_data['course_instructor']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">الفصل الدراسي:</div>
                    <div class="detail-value"><?php echo $grade_data['semester']; ?></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>