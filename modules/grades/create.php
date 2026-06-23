<?php
include "../../config.php";
checkLogin();

// تعريف المتغيرات وتعيين قيم فارغة لها
$student_id = $course_id = $grade = $semester = "";
$student_id_err = $course_id_err = $grade_err = $semester_err = "";

// معالجة بيانات النموذج عند تقديم النموذج
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    // التحقق من الطالب
    if(empty(trim($_POST["student_id"]))){
        $student_id_err = "يرجى اختيار الطالب.";
    } else{
        $student_id = trim($_POST["student_id"]);
    }
    
    // التحقق من المادة
    if(empty(trim($_POST["course_id"]))){
        $course_id_err = "يرجى اختيار المادة.";
    } else{
        $course_id = trim($_POST["course_id"]);
    }
    
    // التحقق من الدرجة
    if(empty(trim($_POST["grade"]))){
        $grade_err = "يرجى إدخال الدرجة.";
    } elseif(!is_numeric(trim($_POST["grade"])) || trim($_POST["grade"]) < 0 || trim($_POST["grade"]) > 100){
        $grade_err = "يجب أن تكون الدرجة بين 0 و 100.";
    } else{
        $grade = trim($_POST["grade"]);
    }
    
    // التحقق من الفصل الدراسي
    if(empty(trim($_POST["semester"]))){
        $semester_err = "يرجى إدخال الفصل الدراسي.";
    } else{
        $semester = trim($_POST["semester"]);
    }
    
    // التحقق من وجود أخطاء قبل الإدراج في قاعدة البيانات
    if(empty($student_id_err) && empty($course_id_err) && empty($grade_err) && empty($semester_err)){
        
        // التحقق من عدم تكرار الدرجة لنفس الطالب والمادة والفصل
        $check_sql = "SELECT id FROM grades WHERE student_id = ? AND course_id = ? AND semester = ?";
        if($check_stmt = mysqli_prepare($conn, $check_sql)){
            mysqli_stmt_bind_param($check_stmt, "iis", $param_student_id, $param_course_id, $param_semester);
            $param_student_id = $student_id;
            $param_course_id = $course_id;
            $param_semester = $semester;
            
            if(mysqli_stmt_execute($check_stmt)){
                mysqli_stmt_store_result($check_stmt);
                
                if(mysqli_stmt_num_rows($check_stmt) > 0){
                    $grade_err = "هذا الطالب لديه درجة بالفعل في هذه المادة لهذا الفصل الدراسي.";
                } else {
                    // إعداد عبارة INSERT
                    $sql = "INSERT INTO grades (student_id, course_id, grade, semester) VALUES (?, ?, ?, ?)";
                     
                    if($stmt = mysqli_prepare($conn, $sql)){
                        // ربط المتغيرات بعبارة الاستعداد كمعلمات
                        mysqli_stmt_bind_param($stmt, "iids", $param_student_id, $param_course_id, $param_grade, $param_semester);
                        
                        // تعيين المعلمات
                        $param_student_id = $student_id;
                        $param_course_id = $course_id;
                        $param_grade = $grade;
                        $param_semester = $semester;
                        
                        // محاولة تنفيذ العبارة المعدة
                        if(mysqli_stmt_execute($stmt)){
                            // تسجيل نجاح وإعادة التوجيه إلى صفحة القائمة
                            $_SESSION['success_message'] = "تم إضافة الدرجة بنجاح.";
                            header("location: list.php");
                            exit();
                        } else{
                            echo "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.";
                        }

                        // إغلاق العبارة
                        mysqli_stmt_close($stmt);
                    }
                }
            }
            mysqli_stmt_close($check_stmt);
        }
    }
    
    // إغلاق الاتصال
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إضافة درجة جديدة - نظام إدارة الدرجات</title>
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
        
        .help-block {
            color: var(--danger-color);
            font-size: 0.9rem;
            margin-top: 0.3rem;
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
                <h2><i class="fas fa-plus-circle"></i> إضافة درجة جديدة</h2>
                <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
            </div>
            
            <div class="card">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                    <div class="form-group <?php echo (!empty($student_id_err)) ? 'has-error' : ''; ?>">
                        <label for="student_id">الطالب</label>
                        <select id="student_id" name="student_id" class="form-control" required>
                            <option value="">اختر الطالب</option>
                            <?php
                            $students_sql = "SELECT id, name FROM students ORDER BY name";
                            $students_result = mysqli_query($conn, $students_sql);
                            while($student = mysqli_fetch_assoc($students_result)) {
                                $selected = ($student_id == $student['id']) ? 'selected' : '';
                                echo "<option value='{$student['id']}' {$selected}>{$student['name']}</option>";
                            }
                            ?>
                        </select>
                        <span class="help-block"><?php echo $student_id_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($course_id_err)) ? 'has-error' : ''; ?>">
                        <label for="course_id">المادة</label>
                        <select id="course_id" name="course_id" class="form-control" required>
                            <option value="">اختر المادة</option>
                            <?php
                            $courses_sql = "SELECT id, name FROM courses WHERE status = 'active' ORDER BY name";
                            $courses_result = mysqli_query($conn, $courses_sql);
                            while($course = mysqli_fetch_assoc($courses_result)) {
                                $selected = ($course_id == $course['id']) ? 'selected' : '';
                                echo "<option value='{$course['id']}' {$selected}>{$course['name']}</option>";
                            }
                            ?>
                        </select>
                        <span class="help-block"><?php echo $course_id_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($grade_err)) ? 'has-error' : ''; ?>">
                        <label for="grade">الدرجة (0-100)</label>
                        <input type="number" id="grade" name="grade" class="form-control" value="<?php echo $grade; ?>" min="0" max="100" step="0.01" required>
                        <span class="help-block"><?php echo $grade_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($semester_err)) ? 'has-error' : ''; ?>">
                        <label for="semester">الفصل الدراسي</label>
                        <input type="text" id="semester" name="semester" class="form-control" value="<?php echo $semester; ?>" required>
                        <span class="help-block"><?php echo $semester_err; ?></span>
                    </div>
                    
                    <div class="form-actions">
                        <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i> إلغاء</button>
                        <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> حفظ الدرجة</button>
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