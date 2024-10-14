<div>
    <a href="?nb=1&msg=Test">Test (1x)</a>
</div>
<div>
    <a href="?nb=5&msg=Test">Test (5x)</a>
</div>
<div>
    <a href="?nb=5&msg=Test">Test (5x)</a>
</div>

<?php
$i = 0;
$nb = $_GET['nb']??1; // si rien dans l'URL mets valeur par défaut à 1
$msg = $_GET['msg']??"coucou ! "; // pareil avec le message, mets coucou si rien
$isImg=isset($_GET['img']);
do {
    if($isImg){
        echo "<img src='$img'>";
    }else {
        echo "$msg<br>";
    }
    $i++;
}while($i<$nb);

?>

