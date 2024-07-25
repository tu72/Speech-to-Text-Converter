<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "speech_to_text";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$text = $_POST['text'];
$sql = "INSERT INTO transcripts (text) VALUES (?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $text);

if ($stmt->execute()) {
    echo "Transcript saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>