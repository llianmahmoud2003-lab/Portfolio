<?php
// بدء الجلسة فقط إذا لم تكن قد بدأت بالفعل
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

include "config.php";

// إذا كان المستخدم مسجلاً دخوله بالفعل، إعادة توجيهه إلى الصفحة الرئيسية
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: index.php");
    exit;
}

$username = $password = "";
$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    
    // استخدام كلمة مرور بسيطة للتحقق
    if($username === "admin" && $password === "admin123"){
        $_SESSION["loggedin"] = true;
        $_SESSION["id"] = 1;
        $_SESSION["username"] = $username;
        header("location: index.php");
        exit;
    } else {
        $error = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
    
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول - نظام إدارة الدرجات</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', 'Cairo', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary-color: #2c7da0;
            --secondary-color: #468faf;
            --accent-color: #f28482;
            --light-color: #f8f9fa;
            --dark-color: #343a40;
            --success-color: #4caf50;
        }
        
        body {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            overflow-x: hidden;
        }
        
        /* تأثير الفقاعات في الخلفية */
        .bubbles {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
            pointer-events: none;
        }
        
        .bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 15s infinite ease-in-out;
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-1000px) rotate(720deg);
                opacity: 0;
            }
        }
        
        .login-container {
            background: rgba(255, 255, 255, 0.95);
            padding: 2.5rem;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 450px;
            animation: slideUp 0.8s ease-out;
            position: relative;
            z-index: 1;
            backdrop-filter: blur(10px);
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(50px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .system-logo {
            text-align: center;
            margin-bottom: 2rem;
            animation: pulse 2s infinite alternate;
        }
        
        @keyframes pulse {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
        }
        
        .system-logo svg {
            width: 80px;
            height: 80px;
            fill: var(--primary-color);
            filter: drop-shadow(0 5px 10px rgba(44, 125, 160, 0.3));
        }
        
        .system-logo h1 {
            margin-top: 15px;
            color: var(--dark-color);
            font-size: 1.8rem;
            font-weight: 700;
        }
        
        .system-logo p {
            color: #666;
            margin-top: 5px;
            font-size: 1rem;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .login-header h2 {
            color: var(--dark-color);
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
            position: relative;
            display: inline-block;
        }
        
        .login-header h2:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            border-radius: 3px;
        }
        
        .login-header p {
            color: #666;
            margin-top: 15px;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
            position: relative;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #444;
            font-size: 0.9rem;
        }
        
        .form-group input {
            width: 100%;
            padding: 1rem 1rem 1rem 3rem;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s;
            background: #f8f9fa;
        }
        
        .form-group input:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(44, 125, 160, 0.1);
            background: white;
            transform: translateY(-2px);
        }
        
        .form-group i {
            position: absolute;
            left: 15px;
            top: 40px;
            color: #6c757d;
            transition: all 0.3s;
        }
        
        .form-group input:focus + i {
            color: var(--primary-color);
        }
        
        .form-group input[type="submit"] {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
            padding: 1rem;
            margin-top: 0.5rem;
            letter-spacing: 0.5px;
            padding-left: 1rem;
        }
        
        .form-group input[type="submit"]:hover {
            transform: translateY(-3px);
            box-shadow: 0 7px 15px rgba(44, 125, 160, 0.3);
        }
        
        .form-group input[type="submit"]:active {
            transform: translateY(0);
        }
        
        .error {
            color: #d9534f;
            text-align: center;
            margin-top: 1rem;
            padding: 1rem;
            background: #ffe6e6;
            border-radius: 10px;
            border-left: 4px solid #d9534f;
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        
        .login-info {
            margin-top: 2rem;
            padding: 1.2rem;
            background: #f8f9fa;
            border-radius: 10px;
            font-size: 0.9rem;
            border-left: 4px solid var(--primary-color);
            animation: fadeIn 1s ease-out;
        }
        
        .login-info strong {
            color: var(--primary-color);
            display: block;
            margin-bottom: 0.5rem;
        }
        
        .features {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .feature {
            flex: 0 0 calc(33.333% - 10px);
            text-align: center;
            margin-bottom: 15px;
            animation: fadeIn 1s ease-out;
            animation-fill-mode: both;
        }
        
        .feature:nth-child(1) { animation-delay: 0.3s; }
        .feature:nth-child(2) { animation-delay: 0.6s; }
        .feature:nth-child(3) { animation-delay: 0.9s; }
        
        .feature i {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 10px;
            background: rgba(44, 125, 160, 0.1);
            width: 60px;
            height: 60px;
            line-height: 60px;
            border-radius: 50%;
            transition: all 0.3s;
        }
        
        .feature:hover i {
            transform: translateY(-5px);
            background: var(--primary-color);
            color: white;
        }
        
        .feature p {
            font-size: 0.8rem;
            color: #666;
            margin-top: 5px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .login-container {
                padding: 1.8rem;
            }
            
            .features {
                flex-direction: column;
            }
            
            .feature {
                flex: 0 0 100%;
                margin-bottom: 20px;
            }
        }
        
        .copyright {
            text-align: center;
            margin-top: 2rem;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.8rem;
            position: absolute;
            bottom: 20px;
            width: 100%;
            left: 0;
        }
    </style>
</head>
<body>
    <!-- تأثير الفقاعات في الخلفية -->
    <div class="bubbles" id="bubbles"></div>
    
    <div class="login-container">
        <div class="system-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
            </svg>
            <h1>نظام إدارة الدرجات</h1>
            <p>إدارة تعليمية متكاملة</p>
        </div>
        
        <div class="login-header">
            <h2>تسجيل الدخول إلى النظام</h2>
            <p>مرحباً بك، يرجى إدخال بيانات الدخول الخاصة بك</p>
        </div>
        
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group">
                <label>اسم المستخدم</label>
                <input type="text" name="username" value="admin" required>
                <i class="fas fa-user"></i>
            </div>
            <div class="form-group">
                <label>كلمة المرور</label>
                <input type="password" name="password" value="admin123" required>
                <i class="fas fa-lock"></i>
            </div>
            <div class="form-group">
                <input type="submit" value="تسجيل الدخول">
            </div>
            <?php if(!empty($error)): ?>
                <div class="error"><?php echo $error; ?></div>
            <?php endif; ?>
        </form>
        
        <div class="login-info">
            <strong>بيانات الدخول الافتراضية:</strong><br>
            اسم المستخدم: admin<br>
            كلمة المرور: admin123
        </div>
        
        <div class="features">
            <div class="feature">
                <i class="fas fa-user-graduate"></i>
                <p>إدارة الطلاب</p>
            </div>
            <div class="feature">
                <i class="fas fa-book"></i>
                <p>إدارة المواد</p>
            </div>
            <div class="feature">
                <i class="fas fa-chart-bar"></i>
                <p>تسجيل الدرجات</p>
            </div>
        </div>
    </div>
    
    <div class="copyright">
        © 2023 نظام إدارة الدرجات. جميع الحقوق محفوظة.
    </div>

    <script>
        // إنشاء فقاعات متحركة في الخلفية
        document.addEventListener('DOMContentLoaded', function() {
            const bubblesContainer = document.getElementById('bubbles');
            const bubblesCount = 15;
            
            for (let i = 0; i < bubblesCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                // أحجام وأماكن عشوائية للفقاعات
                const size = Math.random() * 60 + 20;
                const posX = Math.random() * 100;
                const delay = Math.random() * 15;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${posX}%`;
                bubble.style.bottom = `-${size}px`;
                bubble.style.animationDelay = `${delay}s`;
                bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;
                
                bubblesContainer.appendChild(bubble);
            }
        });
    </script>
</body>
</html>