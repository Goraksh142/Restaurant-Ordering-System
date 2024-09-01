<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $order = json_decode($_POST['order']);
    
    // Example: Process order (you can store it in a database or send it to the kitchen)
    // Assuming order processing logic here

    // Sending confirmation
    echo json_encode(["status" => "success", "message" => "Order received!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
