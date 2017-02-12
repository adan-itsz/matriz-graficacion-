var ancho = prompt("ancho de la matriz");
var alto1 = prompt("alto de la matriz");
var celda;
var textoCelda;
var matriz= new Array(alto1);

for(var i=0;i<alto1;i++){   //creacion de matriz
  matriz[i]=new Array(ancho);
}
for(var i=0;i<alto1;i++){   //inicializar matriz
  for(var j=0;j<ancho;j++){
    matriz[i][j]=0;
  }
}

//se obtiene el body
var body = document.getElementsByTagName("body")[0];

//crear una tabla
var tabla = document.createElement("table");
//se le pone borde a la tabla
tabla.style.border = "0px solid #000"
var tblBody = document.createElement("tbody");

//Crear las celdas----------------------
for(var i=0;i<matriz.length;i++){
  //se crean el alto
var alto = tblBody.insertRow(i);//fila
    for (var j= 0; j < ancho;j++) {
    //Crear un elemento <td> osea el ancho
    // un nodo de texto
    celda= alto.insertCell(j);//columna
    celda.height="20px";
    celda.width="50px";
    //se le da un id a cada celda
    celda.id=i+":"+j;
    //se agrega evento listener a las celdas----------falta revisar!---------
//se le agrega los ceros a cada celda
      textoCelda = document.createTextNode(matriz[i][j]);
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
var randomFila= Math.round(Math.random()*alto1);
var randomColumna=Math.round(Math.random()*ancho);
var cell=document.getElementById(randomFila+ ":"+randomColumna);

cell.style.backgroundColor='red';

//var index=tblBody.fil[randomFila].col[randomColumna].childNodes[0].value;
window.alert(randomFila + " " +randomColumna);
//index.style.backgroundColor="red";

//function pintar(filaa,columnaa){
tblBody.addEventListener("click",function myfunc(){col.style.backgroundColor="red";});
//}
