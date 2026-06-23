<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);
$course = array();
$students = array();

$sql = "SELECT * FROM courses WHERE id = ?";
if($stmt = mysqli_prepare($conn, $sql)){
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $id;
    
    if(mysqli_stmt_execute($stmt)){
        $result = mysqli_stmt_get_result($stmt);
        
        if(mysqli_num_rows($result) == 1){
            $course = mysqli_fetch_array($result, MYSQLI_ASSOC);
            
            // جلب الطلاب المسجلين في هذه المادة
            $students_sql = "SELECT s.name as student_name, g.grade, g.semester 
                          FROM grades g 
                          JOIN students s ON g.student_id = s.id 
                          WHERE g.course_id = ? 
                          ORDER BY g.semester DESC";
            
            if($students_stmt = mysqli_prepare($conn, $students_sql)){
                mysqli_stmt_bind_param($students_stmt, "i", $param_id);
                
                if(mysqli_stmt_execute($students_stmt)){
                    $students_result = mysqli_stmt_get_result($students_stmt);
                    $students = mysqli_fetch_all($students_result, MYSQLI_ASSOC);
                }
                mysqli_stmt_close($students_stmt);
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
    <title>عرض بيانات المادة - نظام إدارة الدرجات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../style.css">
    <style>
        .course-details {
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
        
        .status-active {
            background-color: rgba(39, 174, 96, 0.15);
            color: var(--success-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .status-inactive {
            background-color: rgba(108, 117, 125, 0.15);
            color: var(--gray-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .students-section {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .students-section h3 {
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .student-card {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            border: 1px solid var(--light-gray);
            border-radius: 5px;
            margin-bottom: 1rem;
            transition: all 0.3s;
        }
        
        .student-card:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
        
        .student-name {
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
        
        .no-students {
            text-align: center;
            padding: 2rem;
            color: var(--gray-color);
        }
        
        .no-students i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--light-gray);
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
        
        .btn-warning {
            background: var(--warning-color);
        }
        
        .btn-warning:hover {
            background: #e67e22;
        }
        
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--light-gray);
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
                <a href="list.php" class="active"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="../grades/list.php"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="page-header">
                <h2><i class="fas fa-book"></i> تفاصيل المادة: <?php echo $course['name']; ?></h2>
                <div>
                    <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
                    <a href="edit.php?id=<?php echo $id; ?>" class="btn btn-warning"><i class="fas fa-edit"></i> تعديل</a>
                </div>
            </div>
            
            <div class="course-details">
                <div class="detail-row">
                    <div class="detail-label">اسم المادة:</div>
                    <div class="detail-value"><?php echo $course['name']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">اسم المحاضر:</div>
                    <div class="detail-value"><?php echo $course['instructor']; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">وصف المادة:</div>
                    <div class="detail-value"><?php echo !empty($course['description']) ? $course['description'] : 'لا يوجد وصف'; ?></div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">حالة المادة:</div>
                    <div class="detail-value">
                        <span class="<?php echo ($course['status'] == 'active') ? 'status-active' : 'status-inactive'; ?>">
                            <?php echo ($course['status'] == 'active') ? 'نشط' : 'غير نشط'; ?>
                        </span>
                    </div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">تاريخ الإضافة:</div>
                    <div class="detail-value"><?php echo date('Y-m-d', strtotime($course['created_at'])); ?></div>
                </div>
            </div>
            
            <div class="students-section">
                <h3><i class="fas fa-user-graduate"></i> الطلاب المسجلين في هذه المادة</h3>
                
                <?php if(count($students) > 0): ?>
                    <?php foreach($students as $student): ?>
                        <div class="student-card">
                            <div class="student-info">
                                <div class="student-name"><?php echo $student['student_name']; ?></div>
                                <div class="semester"><?php echo $student['semester']; ?></div>
                            </div>
                            <div class="grade-info">
                                <span class="grade-value"><?php echo $student['grade']; ?></span>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="no-students">
                        <i class="fas fa-user-graduate"></i>
                        <p>لا يوجد طلاب مسجلين في هذه المادة بعد</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>