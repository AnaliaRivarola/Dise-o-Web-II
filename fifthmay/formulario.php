<?php
session_start();
if (!$_SESSION['personas']) {
	$_SESSION['personas']=[];
}
	array_push($_SESSION['personas'], $_POST);
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="css/estilo.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <div class="container">
    <form action="formulario.php" method="post">
      <h1 style="font-style: oblique">Form</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" class="form-control" name="nombre" aria-describedby="emailHelp">
          </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Apellido</label>
        <input type="text" class="form-control" name="apellido">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Fecha de Nacimiento</label>
        <input type="date" class="form-control" name="fenac">
      </div>
      <button type="submit" class="btn btn-light" name="enviar">Enviar</button>
      <button type="submit" class="btn btn-light" name="borrar">Borrar</button>
      <button type="submit" class="btn btn-light" name="destroy">Eliminar Sesion</button>
    </form>
    </div>


    <?php




  if (isset($_POST["borrar"]))
  {
  unset($_SESSION['personas']);

  }


  if (isset($_POST["destroy"]))
  {
  session_destroy();

  }


if (isset($_POST["enviar"]))
{
  echo 	"<table  style="."width:500px"." class="."table".">
		<div class="."container".">
			 <thead class="."thead-dark".">
            <th style="."color:skyblue"." scope="."col".">Nombre</th>
            <th style="."color:skyblue"." scope="."col".">Apellido</th>
				    <th style="."color:skyblue"." scope="."col".">Fecha de Nacimiento</th>
				</tr>
			</thead>
				<tr>";
			for ($i=0; $i<count($_SESSION['personas']) ; $i++)
      {
				echo "<td>".$_SESSION['personas'][$i]['nombre']."</td><td>".$_SESSION['personas'][$i]['apellido']."</td><td>".$_SESSION['personas'][$i]['fenac']."</td>"."</tr>";
			}
}

     ?>


</div>
  </body>
</html>
