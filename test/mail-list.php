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

<form action="mail-list.php" method="post">
            <label for="email">Email</label>
            <input
              class="footer-input"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <label for="zip">Zip Code</label>
            <input
              class="footer-input"
              name="zip"
              id="zip"
              type="number"
              placeholder="Zip Code"
            />
            <button
              type="submit"
              name="submit"
              class="btn btn-light btn-sub btn-card"
            >
              Submit
            </button>
          </form>
