
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css" type="text/css">
    <title>Contact Me</title>
</head>
<body>
        <div class="container">
            <!--Nav Bar -->
            <!-- <nav class="nav-bar">
                <a class="logo"  href="../index.html">Quaid Tahir</a>
                <div class="nav-container">
                    <a href="../files/papers.html" class="nav-items">Papers</a>
                    <a href="../files/3d-art.html"class="nav-items">3d art</a>
                    <a href="../files/references.html"class="nav-items">References</a>
                    <a href="../files/contact-me.html" class="nav-items">Contact Me</a>
                </div>       
            </nav> -->
            
            <h1>Contact Quaid</h1>
            
            
            <div class="form">
                <form action="contact.php" method="POST" autocomplete="off">
                    <input type="text" name="firstName" placeholder="First Name">
                    
                    <input type="text" name="lastName" placeholder="Last Name">
                    
                    <input type="text" name="subject" placeholder="Subject">

                    <input type="text" name="email" placeholder="Email">
                    
                    <textarea type="text" name="message" placeholder="Enter your message here" rows="5" class="textarea"></textarea>
                    
                    <input type="submit">
                </form>
            </div>
            
        </div>

        </body>
</html>