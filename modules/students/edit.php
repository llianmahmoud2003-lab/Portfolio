<?php
include "../../config.php";
checkLogin();

// تعريف المتغيرات وتعيين قيم فارغة لها
$id = $name = $email = $enrollment_date = "";
$name_err = $email_err = $enrollment_date_err = "";

// التحقق من وجود معلمة id
if(isset($_GET["id"]) && !empty(trim($_GET["id"]))){
    $id = trim($_GET["id"]);
    
    // جلب بيانات الطالب الحالية
    $sql = "SELECT * FROM students WHERE id = ?";
    if($stmt = mysqli_prepare($conn, $sql)){
        mysqli_stmt_bind_param($stmt, "i", $param_id);
        $param_id = $id;
        
        if(mysqli_stmt_execute($stmt)){
            $result = mysqli_stmt_get_result($stmt);
            
            if(mysqli_num_rows($result) == 1){
                $row = mysqli_fetch_assoc($result);
                $name = $row["name"];
                $email = $row["email"];
                $enrollment_date = $row["enrollment_date"];
            } else{
                header("location: list.php");
                exit();
            }
        } else{
            echo "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.";
        }
        mysqli_stmt_close($stmt);
    }
} else{
    header("location: list.php");
    exit();
}

// معالجة بيانات النموذج عند تقديم النموذج
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    // التحقق من اسم الطالب
    if(empty(trim($_POST["name"]))){
        $name_err = "يرجى إدخال اسم الطالب.";
    } else{
        $name = trim($_POST["name"]);
    }
    
    // التحقق من البريد الإلكتروني
    if(empty(trim($_POST["email"]))){
        $email_err = "يرجى إدخال البريد الإلكتروني.";
    } elseif(!filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)){
        $email_err = "صيغة البريد الإلكتروني غير صحيحة.";
    } else{
        $email = trim($_POST["email"]);
        
        // التحقق من عدم تكرار البريد الإلكتروني (باستثناء الطالب الحالي)
        $check_sql = "SELECT id FROM students WHERE email = ? AND id != ?";
        if($check_stmt = mysqli_prepare($conn, $check_sql)){
            mysqli_stmt_bind_param($check_stmt, "si", $param_email, $param_id);
            $param_email = $email;
            $param_id = $id;
            
            if(mysqli_stmt_execute($check_stmt)){
                mysqli_stmt_store_result($check_stmt);
                
                if(mysqli_stmt_num_rows($check_stmt) > 0){
                    $email_err = "هذا البريد الإلكتروني مسجل مسبقاً.";
                }
            }
            mysqli_stmt_close($check_stmt);
        }
    }
    
    // التحقق من تاريخ التسجيل
    if(empty(trim($_POST["enrollment_date"]))){
        $enrollment_date_err = "يرجى إدخال تاريخ التسجيل.";
    } else{
        $enrollment_date = trim($_POST["enrollment_date"]);
    }
    
    // التحقق من وجود أخطاء قبل التحديث في قاعدة البيانات
    if(empty($name_err) && empty($email_err) && empty($enrollment_date_err)){
        
        // إعداد عبارة UPDATE
        $sql = "UPDATE students SET name=?, email=?, enrollment_date=? WHERE id=?";
         
        if($stmt = mysqli_prepare($conn, $sql)){
            // ربط المتغيرات بعبارة الاستعداد كمعلمات
            mysqli_stmt_bind_param($stmt, "sssi", $param_name, $param_email, $param_enrollment_date, $param_id);
            
            // تعيين المعلمات
            $param_name = $name;
            $param_email = $email;
            $param_enrollment_date = $enrollment_date;
            $param_id = $id;
            
            // محاولة تنفيذ العبارة المعدة
            if(mysqli_stmt_execute($stmt)){
                // تسجيل نجاح وإعادة التوجيه إلى صفحة القائمة
                $_SESSION['success_message'] = "تم تحديث بيانات الطالب بنجاح.";
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
    <title>تعديل الطالب - نظام إدارة الدرجات</title>
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
                <a href="list.php" class="active"><i class="fas fa-user-graduate"></i> إدارة الطلاب</a>
                <a href="../courses/list.php"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="../grades/list.php"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="page-header">
                <h2><i class="fas fa-edit"></i> تعديل الطالب: <?php echo $name; ?></h2>
                <a href="list.php" class="btn"><i class="fas fa-arrow-right"></i> العودة إلى القائمة</a>
            </div>
            
            <div class="card">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>?id=<?php echo $id; ?>" method="POST">
                    <input type="hidden" name="id" value="<?php echo $id; ?>">
                    
                    <div class="form-group <?php echo (!empty($name_err)) ? 'has-error' : ''; ?>">
                        <label for="name">اسم الطالب</label>
                        <input type="text" id="name" name="name" class="form-control" value="<?php echo $name; ?>" required>
                        <span class="help-block"><?php echo $name_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($email_err)) ? 'has-error' : ''; ?>">
                        <label for="email">البريد الإلكتروني</label>
                        <input type="email" id="email" name="email" class="form-control" value="<?php echo $email; ?>" required>
                        <span class="help-block"><?php echo $email_err; ?></span>
                    </div>
                    
                    <div class="form-group <?php echo (!empty($enrollment_date_err)) ? 'has-error' : ''; ?>">
                        <label for="enrollment_date">تاريخ التسجيل</label>
                        <input type="date" id="enrollment_date" name="enrollment_date" class="form-control" value="<?php echo $enrollment_date; ?>" required>
                        <span class="help-block"><?php echo $enrollment_date_err; ?></span>
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
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const dateInput = document.getElementById('enrollment_date');
                
                if (nameInput.value.trim() === '') {
                    isValid = false;
                    alert('يرجى إدخال اسم الطالب');
                    nameInput.focus();
                } else if (emailInput.value.trim() === '') {
                    isValid = false;
                    alert('يرجى إدخال البريد الإلكتروني');
                    emailInput.focus();
                } else if (dateInput.value === '') {
                    isValid = false;
                    alert('يرجى إدخال تاريخ التسجيل');
                    dateInput.focus();
                }
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    </script>
</body>
</html>