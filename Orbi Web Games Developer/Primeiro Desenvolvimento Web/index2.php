<html>
    <head>
    <title>Desenvolvimento Página 2</title>
    
    //Biblioteca do JavaScript
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>

    //Configuração do estilo CSS do texto
    <style type="text/css">
        .linha {
            font-weight: bold;
            color: red;
            padding-left: 10px;
            line-height: 50px;
        }
    </style>
    </head>

    //Função PHP para realizar a contagem de 0 a 10
    <body>
        <?php
            for ($i = 0 ; $i < 10 ; $i++) {
                print ( "<span class=\"linha\">Linha número " . $i . "</span><br />");
            }
        ?>
    </body>

    //Função que exibe mensagem na tela em forma de PopUP
    <script type="text/javascript">
        $(document).ready(function() {
            alert("Contagem terminou");
        });        

    </script>

</html>