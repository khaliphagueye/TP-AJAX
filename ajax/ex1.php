<?php
    header("content-Type: text/xml");
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
    echo '<response>';
    $name = $_GET['name'];
    $maitres =  array('khalifa', 'bay gueye', 'anta gueye', 'cheikh' );
    if(in_array(strtoupper($name) , $maitres)){
        echo 'Salut grand maitre '.htmlentities($name);
    }elseif(trim($name)==''){
        echo 'Coucou étranger! quel est votre nom';
    }else {
        echo 'OMG '.htmlentities($name).'. je ne te connais pas';
    }

    echo '</response>' ;
?>