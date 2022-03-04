<?php
    include "./config.php";
    //session
    //cookie
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/reset.css">
    <?php
        //use this to refresh cache
        echo '<link rel="stylesheet" href="./css/index.css?'.time().'">'; 
    ?>
    <script src="https://kit.fontawesome.com/1109f4633a.js" crossorigin="anonymous"></script>
    <script src="./js/jquery.js"></script>
    <title>Jonny and The Rose</title>
</head>
<body>
    <header>
        <div class="header_bg">
            <div class="header_cap" id="cap_position">
                <h2 class="header_cap_word"></h2>
                <h2 class="header_cap_word"></h2>
                <h2 class="header_cap_word"></h2>
            </div>
        </div>
    </header>
    <nav id="navbar">
        <div class="logo">
            logo
        </div>
        <ul>
            <!-- Routing -->
            <li><a href="<?php route_pages("home")?>">HOME</a></li>
            <li><a href="<?php route_pages("bio")?>#bio">BIO</a></li>
            <li><a href="<?php route_pages("photo")?>#photo">PHOTO</a></li>
            <li><a href="<?php route_pages("event")?>#event">EVENT</a></li>
            <li><a href="<?php route_pages("contact")?>#contact">CONTACT</a></li>
             <!-- Routing -->
        </ul>
        <div class="toggle_menu" id="dropdown_button">
            <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
    <div class="dropdown_menu" id="dropdown">
        <ul>
            <!-- Routing -->
            <li><a href="<?php route_pages("home")?>">HOME</a></li>
            <li><a href="<?php route_pages("bio")?>#bio">BIO</a></li>
            <li><a href="<?php route_pages("photo")?>#photo">PHOTO</a></li>
            <li><a href="<?php route_pages("event")?>#event">EVENT</a></li>
            <li><a href="<?php route_pages("contact")?>#contact">CONTACT</a></li>
             <!-- Routing -->
        </ul>
    </div>
    <main>
        <?php
        // page handling
            if(isset($_GET["page"])){
                include "./pages/".$_GET["page"].".php";
            }
            else{
                //default
                include "./pages/home.php";
            }
         // - page handling
        ?>       
    </main>
    <footer>
        <div class="sns">
            <span><i class="fa-brands fa-instagram-square"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-brands fa-facebook-square"></i></span>
        </div>
    </footer>

    <script src="./js/index.js"></script>
    <?php
         if($_GET["page"]=="contact"){
            echo '<script>$("body").addClass("ch_img");</script>';
        }
        else{
            echo '<script>$("body").removeClass("ch_img");</script>';
        }
    ?>
    
</body>
</html>