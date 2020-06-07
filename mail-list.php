<?php

$email = $_POST['email'];
$zip = $_POST['zip'];

$email_subject = 'New Email List Submission';
$email_body = "Someone has requested to be added to the Email List.\n".
                "User Email: $email\n".
                    "User Zip: $zip";

$to = 'site-admin@kathrynroberts-sc48.com';

$headers = "From: $email\r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

?>
