<?php
// بدء الجلسة فقط إذا لم تكن قد بدأت بالفعل
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

include "config.php";
checkLogin();
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة التحكم - نظام إدارة الدرجات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="dashboard">
        <header>
            <div class="header-content">
                <h1><i class="fas fa-graduation-cap"></i> نظام إدارة الدرجات</h1>
                <div class="user-info">
                    <span><i class="fas fa-user"></i> <?php echo $_SESSION["username"]; ?></span>
                    <a href="logout.php" class="logout-btn"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
                </div>
            </div>
            <nav>
                <a href="index.php" class="active"><i class="fas fa-home"></i> الرئيسية</a>
                <a href="modules/students/list.php"><i class="fas fa-user-graduate"></i> إدارة الطلاب</a>
                <a href="modules/courses/list.php"><i class="fas fa-book"></i> إدارة المواد</a>
                <a href="modules/grades/list.php"><i class="fas fa-chart-bar"></i> إدارة الدرجات</a>
            </nav>
        </header>

        <div class="main-content">
            <div class="welcome-section">
                <h2>مرحباً <?php echo $_SESSION["username"]; ?>!</h2>
                <p>هنا يمكنك إدارة درجات الطلاب بكفاءة وسهولة. استخدم القائمة أعلاه للوصول إلى الأقسام المختلفة.</p>
            </div>
            
            <div class="stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <div class="stat-info">
                        <h3>عدد الطلاب</h3>
                        <p>
                            <?php
                            $sql = "SELECT COUNT(*) as total FROM students";
                            $result = mysqli_query($conn, $sql);
                            $row = mysqli_fetch_assoc($result);
                            echo $row['total'];
                            ?>
                        </p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stat-info">
                        <h3>عدد المواد</h3>
                        <p>
                            <?php
                            $sql = "SELECT COUNT(*) as total FROM courses";
                            $result = mysqli_query($conn, $sql);
                            $row = mysqli_fetch_assoc($result);
                            echo $row['total'];
                            ?>
                        </p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="stat-info">
                        <h3>متوسط الدرجات</h3>
                        <p>
                            <?php
                            $sql = "SELECT AVG(grade) as average FROM grades";
                            $result = mysqli_query($conn, $sql);
                            $row = mysqli_fetch_assoc($result);
                            echo round($row['average'], 2);
                            ?>
                        </p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="stat-info">
                        <h3>أعلى درجة</h3>
                        <p>
                            <?php
                            $sql = "SELECT MAX(grade) as max_grade FROM grades";
                            $result = mysqli_query($conn, $sql);
                            $row = mysqli_fetch_assoc($result);
                            echo $row['max_grade'];
                            ?>
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="recent-activities">
                <h3><i class="fas fa-history"></i> أحدث الدرجات المسجلة</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>اسم الطالب</th>
                                <th>المادة</th>
                                <th>الدرجة</th>
                                <th>الفصل الدراسي</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $sql = "SELECT s.name as student_name, c.name as course_name, 
                                    g.grade, g.semester
                                    FROM grades g
                                    JOIN students s ON g.student_id = s.id
                                    JOIN courses c ON g.course_id = c.id
                                    ORDER BY g.id DESC LIMIT 5";
                            $result = mysqli_query($conn, $sql);
                            
                            if(mysqli_num_rows($result) > 0){
                                while($row = mysqli_fetch_assoc($result)){
                                    echo "<tr>
                                        <td>{$row['student_name']}</td>
                                        <td>{$row['course_name']}</td>
                                        <td><span class='grade'>{$row['grade']}</span></td>
                                        <td>{$row['semester']}</td>
                                    </tr>";
                                }
                            } else {
                                echo "<tr><td colspan='4'>لا توجد درجات مسجلة</td></tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>