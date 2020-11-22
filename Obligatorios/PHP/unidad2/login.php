<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Back</title>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <div class="jumbotron text-center">
                  <h1 class="">Bienvenido al Sistema</h1>
                  <h3 class="mt-3">Los datos ingresados son:</h3>  
                  <h4 class="text-danger mt-4">
                      Tu Usuario: <?php echo $_POST["usuario"]?>  
                  </h4>   
                  <h4 class="text-danger mt-3">
                      Tu Clave: <?php echo $_POST["password"]?>  
                   </h4>                   
    
                </div>
        
            </div>
        </div>
    </div>

</body>
</html>

