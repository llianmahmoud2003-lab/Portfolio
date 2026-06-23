<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);
$student = array();
$grades = array();

$sql = "SELECT * FROM students WHERE id = ?";
if($stmt = mysqli_prepare($conn, $sql)){
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $id;
    
    if(mysqli_stmt_execute($stmt)){
        $result = mysqli_stmt_get_result($stmt);
        
        if(mysqli_num_rows($result) == 1){
            $student = mysqli_fetch_array($result, MYSQLI_ASSOC);
            
            // جلب درجات الطالب
            $grades_sql = "SELECT c.name as course_name, g.grade, g.semester 
                          FROM grades g 
                          JOIN courses c ON g.course_id = c.id 
                          WHERE g.student_id = ? 
                          ORDER BY g.semester DESC";
            
            if($grades_stmt = mysqli_prepare($conn, $grades_sql)){
                mysqli_stmt_bind_param($grades_stmt, "i", $param_id);
                
                if(mysqli_stmt_execute($grades_stmt)){
                    $grades_result = mysqli_stmt_get_result($grades_stmt);
                    $grades = mysqli_fetch_all($grades_result, MYSQLI_ASSOC);
                }
                mysqli_stmt_close($grades_stmt);
            }
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
    <title>عرض بيانات الطالب - نظام إدارة الدرجات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../style.css">
    <style>
        .student-details {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
        }
        
        .detail-row {
            display: flex;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .detail-label {
            flex: 0 0 150px;
            font-weight: 600;
            color: var(--dark-color);
        }
        
        .detail-value {
            flex: 1;
            color: var(--gray-color);
        }
        
        .grades-section {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .grades-section h3 {
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .grade-card {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            border: 1px solid var(--light-gray);
            border-radius: 5px;
            margin-bottom: 1rem;
            transition: all 0.3s;
        }
        
        .grade-card:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
        
        .course-name {
            font-weight: 600;
        }
        
        .grade-value {
            background: rgba(76, 175, 80, 0.1);
            color: var(--success-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-weight: 600;
        }
        
        .semester {
            color: var(--gray-color);
            font-size: 0.9rem;
        }
        
        .no-grades {
            text-align: center;
            padding: 2rem;
            color: var(--gray-color);
        }
        
        .no-grades i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--light-gray);
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 0.6rem 1.2rem;
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
        }
        
        .btn-secondary {
            background: var(--gray-color);
        }
        
        .btn-secondary:hover {
            background: #5a6268;
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
                <a href="list.php" class="active"><i class="fas fa-user-graduate"></i> إدارة الطلاب</a>
                <a href="../courses/list.php"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="../grades/list.php"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="page-header">
                <h2><i class="fas fa-eye"></i> عرض بيانات الطالب</h2>
                <a href="list.php" class="btn btn-secondary"><i class="fas fa-arrow-right"></i> رجوع للقائمة</a>
            </div>
            
            <div class="student-details">
                <div class="detail-row">
                    <div class="detail-label">اسم الطالب:</div>
                    <div class="detail-value"><?php echo $student['name']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">البريد الإلكتروني:</div>
                    <div class="detail-value"><?php echo $student['email']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">تاريخ التسجيل:</div>
                    <div class="detail-value"><?php echo $student['enrollment_date']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">الإجراءات:</div>
                    <div class="detail-value">
                        <a href="edit.php?id=<?php echo $student['id']; ?>" class="btn"><i class="fas fa-edit"></i> تعديل</a>
                    </div>
                </div>
            </div>
            
            <div class="grades-section">
                <h3><i class="fas fa-chart-bar"></i> الدرجات المسجلة</h3>
                
                <?php if(!empty($grades)): ?>
                    <?php foreach($grades as $grade): ?>
                        <div class="grade-card">
                            <div>
                                <div class="course-name"><?php echo $grade['course_name']; ?></div>
                                <div class="semester"><?php echo $grade['semester']; ?></div>
                            </div>
                            <div class="grade-value"><?php echo $grade['grade']; ?></div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="no-grades">
                        <i class="fas fa-clipboard-list"></i>
                        <p>لا توجد درجات مسجلة لهذا الطالب بعد</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>