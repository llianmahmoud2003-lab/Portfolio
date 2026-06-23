<?php
include "../../config.php";
checkLogin();

if(!isset($_GET["id"]) || empty($_GET["id"])){
    header("location: list.php");
    exit();
}

$id = trim($_GET["id"]);
$grade_data = array();

// جلب بيانات الدرجة الحالية
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
            $grade_data = mysqli_fetch_array($result, MYSQLI_ASSOC);
        } else {
            header("location: list.php");
            exit();
        }
    }
    mysqli_stmt_close($stmt);
}

// جلب قائمة الطلاب والمواد
$students_sql = "SELECT * FROM students ORDER BY name";
$students_result = mysqli_query($conn, $students_sql);

$courses_sql = "SELECT * FROM courses ORDER BY name";
$courses_result = mysqli_query($conn, $courses_sql);

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $student_id = trim($_POST["student_id"]);
    $course_id = trim($_POST["course_id"]);
    $grade = trim($_POST["grade"]);
    $semester = trim($_POST["semester"]);
    
    // التحقق من عدم وجود درجة مسجلة لنفس الطالب والمادة والفصل (باستثناء السجل الحالي)
    $check_sql = "SELECT id FROM grades WHERE student_id = ? AND course_id = ? AND semester = ? AND id != ?";
    if($check_stmt = mysqli_prepare($conn, $check_sql)){
        mysqli_stmt_bind_param($check_stmt, "iisi", $student_id, $course_id, $semester, $id);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);
        
        if(mysqli_stmt_num_rows($check_stmt) > 0){
            $error = "هذا الطالب لديه درجة مسجلة في هذه المادة لنفس الفصل الدراسي";
        } else {
            // تحديث الدرجة في قاعدة البيانات
            $sql = "UPDATE grades SET student_id=?, course_id=?, grade=?, semester=? WHERE id=?";
            
            if($stmt = mysqli_prepare($conn, $sql)){
                mysqli_stmt_bind_param($stmt, "iidsi", $student_id, $course_id, $grade, $semester, $id);
                
                if(mysqli_stmt_execute($stmt)){
                    header("location: list.php");
                    exit();
                } else {
                    $error = "حدث خطأ أثناء تعديل الدرجة";
                }
                mysqli_stmt_close($stmt);
            }
        }
        mysqli_stmt_close($check_stmt);
    }
}
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تعديل الدرجة - نظام إدارة الدرجات</title>
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
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--dark-color);
        }
        
        .form-control {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--light-gray);
            border-radius: 5px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }
        
        .form-actions {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--light-gray);
        }
        
        .alert {
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .alert-success {
            background-color: rgba(39, 174, 96, 0.15);
            color: var(--success-color);
            border: 1px solid rgba(39, 174, 96, 0.3);
        }
        
        .alert-danger {
            background-color: rgba(231, 76, 60, 0.15);
            color: var(--danger-color);
            border: 1px solid rgba(231, 76, 60, 0.3);
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
                <h2><i class="fas fa-edit"></i> تعديل الدرجة</h2>
                <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
            </div>
            
            <div class="card">
                <?php if(isset($error)): ?>
                    <div class="alert alert-danger">
                        <i class="fas fa-exclamation-circle"></i> <?php echo $error; ?>
                    </div>
                <?php endif; ?>
                
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) . '?id=' . $id; ?>" method="POST">
                    <div class="form-group">
                        <label for="student_id">الطالب</label>
                        <select id="student_id" name="student_id" class="form-control" required>
                            <option value="">اختر الطالب</option>
                            <?php 
                            // إعادة تعيين مؤشر نتيجة الاستعلام
                            mysqli_data_seek($students_result, 0);
                            while($student = mysqli_fetch_assoc($students_result)): 
                            ?>
                                <option value="<?php echo $student['id']; ?>" <?php if((isset($_POST['student_id']) && $_POST['student_id'] == $student['id']) || $grade_data['student_id'] == $student['id']) echo 'selected'; ?>>
                                    <?php echo $student['name']; ?>
                                </option>
                            <?php endwhile; ?>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="course_id">المادة</label>
                        <select id="course_id" name="course_id" class="form-control" required>
                            <option value="">اختر المادة</option>
                            <?php 
                            // إعادة تعيين مؤشر نتيجة الاستعلام
                            mysqli_data_seek($courses_result, 0);
                            while($course = mysqli_fetch_assoc($courses_result)): 
                            ?>
                                <option value="<?php echo $course['id']; ?>" <?php if((isset($_POST['course_id']) && $_POST['course_id'] == $course['id']) || $grade_data['course_id'] == $course['id']) echo 'selected'; ?>>
                                    <?php echo $course['name']; ?>
                                </option>
                            <?php endwhile; ?>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="grade">الدرجة</label>
                        <input type="number" id="grade" name="grade" class="form-control" min="0" max="100" step="0.01" required 
                               value="<?php if(isset($_POST['grade'])) echo $_POST['grade']; else echo $grade_data['grade']; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="semester">الفصل الدراسي</label>
                        <input type="text" id="semester" name="semester" class="form-control" required 
                               value="<?php if(isset($_POST['semester'])) echo $_POST['semester']; else echo $grade_data['semester']; ?>">
                    </div>
                    
                    <div class="form-actions">
                        <a href="list.php" class="btn btn-danger"><i class="fas fa-times"></i> إلغاء</a>
                        <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> حفظ التعديلات</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                let isValid = true;
                const studentSelect = document.getElementById('student_id');
                const courseSelect = document.getElementById('course_id');
                const gradeInput = document.getElementById('grade');
                const semesterInput = document.getElementById('semester');
                
                if (studentSelect.value === '') {
                    isValid = false;
                    alert('يرجى اختيار الطالب');
                    studentSelect.focus();
                } else if (courseSelect.value === '') {
                    isValid = false;
                    alert('يرجى اختيار المادة');
                    courseSelect.focus();
                } else if (gradeInput.value === '' || gradeInput.value < 0 || gradeInput.value > 100) {
                    isValid = false;
                    alert('يرجى إدخال درجة صحيحة بين 0 و 100');
                    gradeInput.focus();
                } else if (semesterInput.value.trim() === '') {
                    isValid = false;
                    alert('يرجى إدخال الفصل الدراسي');
                    semesterInput.focus();
                }
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    </script>
</body>
</html>