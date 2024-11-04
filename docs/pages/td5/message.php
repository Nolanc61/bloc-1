<?php
    $msg = $_GET['msg']??"Message par défaut "; // si rien dans msg, alors met Message par défaut
    echo "$msg<br><br>";
?>

<div>
    <a href="?msg=Salut+le+monde">Salut le monde<br><br></a></li>
</div>
<div>
    <a href="?msg=Comment+ça+va+?">Comment ça va ?<br><br></a></li>
</div>
<div>
    <a href="?msg=Ceci+est+un+test">Ceci est un test<br><br></a></li>
</div>
</body>
</html>

<?php
    $msg = $_GET['msg']??"Message par défaut "; // si rien dans msg, alors met Message par défaut
    echo "$msg<br><br>";

?>
