<?php
    function route_pages($page){
        echo $_SERVER["PHP_SELF"]."?page=".$page;
    }
?>