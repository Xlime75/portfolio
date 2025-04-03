<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mail = new PHPMailer(true);
            try {
                // SMTP Settings
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                require 'config.php';
                
                $mail->Username = GMAIL_USERNAME;
                $mail->Password = GMAIL_APP_PASSWORD;
                
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;
              
                $mail->setFrom('asherdanieltibayan@gmail.com', 'Asher Daniel');
                $mail->addAddress('asherdanieltibayan@gmail.com'); 
         
                $mail->isHTML(true);
                $mail->Subject = 'New Contact Form Submission';
                $mail->Body = "<p><strong>Name:</strong> $name</p>
                               <p><strong>Email:</strong> $email</p>
                               <p><strong>Message:</strong> $message</p>";

                $mail->send();
                echo 'Message sent successfully!';
            } catch (Exception $e) {
                echo "Mailer Error: {$mail->ErrorInfo}";
            }
        } else {
            echo 'Invalid email address.';
        }
    } else {
        echo 'Please fill in all fields.';
    }
}
?>
