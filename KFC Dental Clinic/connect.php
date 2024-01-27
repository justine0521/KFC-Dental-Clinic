<?php
$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$date = $_POST['pref-date'];
$time = $_POST['time'];
$branch = $_POST['branch'];
$service = $_POST['service'];

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'website_form';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$sql = "INSERT INTO appointments (firstName, lastName, phoneNumber, email, date, time, branch, service)
        VALUES ('$firstName', '$lastName', '$phoneNumber', '$email', '$date', '$time', '$branch', '$service')";

if ($conn->query($sql) === TRUE) {
    echo '<div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; font-family: Arial, Helvetica, sans-serif;">
            Your response is pending. Check your email when it\'s confirmed. You\'re Redirecting to Home page.
          </div>';

    echo '<script>
            setTimeout(function(){
                window.location.href = "index.html"; // Redirect to the home page
            }, 6000); // Redirect after 6 seconds
          </script>';
          
} else {
    echo '<div style="background-color: #f44336; color: white; padding: 20px; text-align: center; font-family: Arial, Helvetica, sans-serif;">
            Error: ' . $sql . '<br>' . $conn->error . '
          </div>';
}

$conn->close();
?>
