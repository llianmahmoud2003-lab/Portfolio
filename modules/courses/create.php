<?php
include "../../config.php";
checkLogin();

// تعريف المتغيرات وتعيين قيم فارغة لها
$name = $instructor = $description = "";
$status = "active";
$name_err = $instructor_err = "";

// معالجة بيانات النموذج عند تقديم النموذج
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    // التحقق من اسم المادة
    if(empty(trim($_POST["name"]))){
        $name_err = "يرجى إدخال اسم المادة.";
    } else{
        $name = trim($_POST["name"]);
    }
    
    // التحقق من اسم المحاضر
    if(empty(trim($_POST["instructor"]))){
        $instructor_err = "يرجى إدخال اسم المحاضر.";
    } else{
        $instructor = trim($_POST["instructor"]);
    }
    
    // الحصول على البيانات الأخرى
    $description = trim($_POST["description"]);
    $status = trim($_POST["status"]);
    
    // التحقق من وجود أخطاء قبل الإدراج في قاعدة البيانات
    if(empty($name_err) && empty($instructor_err)){
        
        // إعداد عبارة INSERT
        $sql = "INSERT INTO courses (name, instructor, description, status) VALUES (?, ?, ?, ?)";
         
        if($stmt = mysqli_prepare($conn, $sql)){
            // ربط المتغيرات بعبارة الاستعداد كمعلمات
            mysqli_stmt_bind_param($stmt, "ssss", $param_name, $param_instructor, $param_description, $param_status);
            
            // تعيين المعلمات
            $param_name = $name;
            $param_instructor = $instructor;
            $param_description = $description;
            $param_status = $status;
            
            // محاولة تنفيذ العبارة المعدة
            if(mysqli_stmt_execute($stmt)){
                // تسجيل نجاح وإعادة التوجيه إلى صفحة القائمة
                $_SESSION['success_message'] = "تم إضافة المادة بنجاح.";
                header("location: list.php");
                exit();
            } else{
                echo "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.";
            }

            // إغلاق العبارة
            mysqli_stmt_close($stmt);
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
    <title>إضافة مادة جديدة - نظام إدارة الدرجات</title>
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
        
        textarea.form-control {
            min-height: 120px;
            resize: vertical;
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
                <a href="list.php" class="active"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="../grades/list.php"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="page-header">
                <h2><i class="fas fa-plus-circle"></i> إضافة مادة جديدة</h2>
                <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
            </div>
            
            <div class="card">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                    <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : ''; ?>">
                        <label for="name">اسم المادة</label>
                        <input type="text" id="name" name="name" class="form-control" value="<?php echo $name; ?>" required>
                        <span class="help-block"><?php echo $name_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($instructor_err)) ? 'has-error' : ''; ?>">
                        <label for="instructor">اسم المحاضر</label>
                        <input type="text" id="instructor" name="instructor" class="form-control" value="<?php echo $instructor; ?>" required>
                        <span class="help-block"><?php echo $instructor_err; ?></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="description">وصف المادة</label>
                        <textarea id="description" name="description" class="form-control"><?php echo $description; ?></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="status">حالة المادة</label>
                        <select id="status" name="status" class="form-control" required>
                            <option value="active" <?php echo ($status == 'active') ? 'selected' : ''; ?>>نشط</option>
                            <option value="inactive" <?php echo ($status == 'inactive') ? 'selected' : ''; ?>>غير نشط</option>
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i> إلغاء</button>
                        <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> حفظ المادة</button>
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
                const nameInput = document.getElementById('name');
                const instructorInput = document.getElementById('instructor');
                
                if (nameInput.value.trim() === '') {
                    isValid = false;
                    alert('يرجى إدخال اسم المادة');
                    nameInput.focus();
                } else if (instructorInput.value.trim() === '') {
                    isValid = false;
                    alert('يرجى إدخال اسم المحاضر');
                    instructorInput.focus();
                }
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    </script>
</body>
</html>