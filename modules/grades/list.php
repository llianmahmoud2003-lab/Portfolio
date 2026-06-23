<?php
include "../../config.php";
checkLogin();
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>قائمة الدرجات - نظام إدارة الدرجات</title>
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
        
        .actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .action-btn {
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            font-size: 0.8rem;
            text-decoration: none;
        }
        
        .empty-state {
            text-align: center;
            padding: 2rem;
            color: var(--gray-color);
        }
        
        .empty-state i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--light-gray);
        }
        
        .grade-excellent {
            background-color: rgba(39, 174, 96, 0.15);
            color: var(--success-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .grade-good {
            background-color: rgba(41, 128, 185, 0.15);
            color: #2980b9;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .grade-average {
            background-color: rgba(243, 156, 18, 0.15);
            color: #f39c12;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .grade-poor {
            background-color: rgba(231, 76, 60, 0.15);
            color: #e74c3c;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
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
                <h2><i class="fas fa-chart-bar"></i> إدارة الدرجات</h2>
                <a href="create.php" class="btn"><i class="fas fa-plus"></i> إضافة درجة جديدة</a>
            </div>
            
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>الطالب</th>
                            <th>المادة</th>
                            <th>الدرجة</th>
                            <th>الفصل الدراسي</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $sql = "SELECT g.id, g.grade, g.semester, 
                                s.name as student_name, 
                                c.name as course_name 
                                FROM grades g
                                JOIN students s ON g.student_id = s.id
                                JOIN courses c ON g.course_id = c.id
                                ORDER BY g.id DESC";
                        $result = mysqli_query($conn, $sql);
                        
                        if(mysqli_num_rows($result) > 0){
                            $count = 1;
                            while($row = mysqli_fetch_assoc($result)){
                                $grade_class = '';
                                if ($row['grade'] >= 90) {
                                    $grade_class = 'grade-excellent';
                                } elseif ($row['grade'] >= 80) {
                                    $grade_class = 'grade-good';
                                } elseif ($row['grade'] >= 70) {
                                    $grade_class = 'grade-average';
                                } else {
                                    $grade_class = 'grade-poor';
                                }
                                
                                echo "<tr>
                                    <td>{$count}</td>
                                    <td>{$row['student_name']}</td>
                                    <td>{$row['course_name']}</td>
                                    <td><span class='{$grade_class}'>{$row['grade']}</span></td>
                                    <td>{$row['semester']}</td>
                                    <td class='actions'>
                                        <a href='view.php?id={$row['id']}' class='action-btn btn' title='عرض'><i class='fas fa-eye'></i></a>
                                        <a href='edit.php?id={$row['id']}' class='action-btn btn-success' title='تعديل'><i class='fas fa-edit'></i></a>
                                        <a href='delete.php?id={$row['id']}' class='action-btn btn-danger' title='حذف' onclick=\"return confirm('هل أنت متأكد من حذف هذه الدرجة؟')\"><i class='fas fa-trash'></i></a>
                                    </td>
                                </tr>";
                                $count++;
                            }
                        } else {
                            echo "<tr><td colspan='6' class='empty-state'>
                                <i class='fas fa-chart-bar'></i>
                                <p>لا توجد درجات مسجلة بعد</p>
                            </td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>