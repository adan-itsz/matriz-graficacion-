var ancho = prompt("ancho de la matriz");
var alto1 = prompt("alto de la matriz");
var celda;
var textoCelda;

//se obtiene el body
var body = document.getElementsByTagName("body")[0];

//crear una tabla
var tabla = document.createElement("table");
//se le pone borde a la tabla
tabla.style.border = "0px solid #000"

var tblBody = document.createElement("tbody");



//Crear las celdas----------------------
for(var i=0;i<alto1;i++){
  //se crean el alto
var alto = tblBody.insertRow(i);
    for (var j= 0; j < ancho;j++) {
    //Crear un elemento <td> osea el ancho
    // un nodo de texto

    celda= alto.insertCell(j);
    celda.height="20px";
    celda.width="50px";
    //se le da un id a cada celda
    celda.id=i+":"+j;
    //se agrega evento listener a las celdas----------falta revisar!---------
    celda.addEventListener("click",function myfunc(){celda.style.backgroundColor="red";});
//se le agrega los ceros a cada celda
      textoCelda = document.createTextNode("0");
      //se le pone borde a cada celda
      celda.style.border = "1px solid #000"
      //se pinta cada celda
      celda.style.backgroundColor = "#E9E3E9";

      celda.appendChild(textoCelda);
      alto.appendChild(celda);
    }

  //agrega la siguiente hilera al final de la tabla
  tblBody.appendChild(alto);
}
//posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
body.appendChild(tabla);


$(document).ready(function(){
        $(".boton").click(function(){

            var valores="";

            // Obtenemos todos los valores contenidos en los <td> de la fila
            // seleccionada
            $(this).parents("tr").find("td").each(function(){
                valores+=$(this).html()+"\n";
            });

            alert(valores);
        });
    });
