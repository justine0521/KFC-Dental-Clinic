<?php
$Name = $_POST['full-name'];
$Email = $_POST['Email'];
$message = $_POST['contact-message'];

// Database Connection
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'website_form';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Insert data into the 'contact' table
$sql = "INSERT INTO contact (Name, Email, Message)
        VALUES ('$Name', '$Email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo '<div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; font-family: Arial, Helvetica, sans-serif;">
    Thank you! Your message has been successfully submitted. You\'re Redirecting to Home page.
    </div>';

    echo '<script>
            setTimeout(function(){
                window.location.href = "index.html";
            }, 5000);
          </script>';

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>