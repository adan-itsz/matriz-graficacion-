
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

var randomFila= Math.round(Math.random()*alto1-1);
var randomColumna=Math.round(Math.random()*ancho-1);
var cell=document.getElementById(randomFila+ ":"+randomColumna);

cell.style.backgroundColor='red';
var indiceFilas=randomFila;
var indiceColumnas=randomColumna;
window.alert(randomFila + " " +randomColumna);
shortcut("Up",function(){ subir(1)});
shortcut("Down",function(){subir(2)});
shortcut("Left",function(){lados(1)});
shortcut("Right",function(){lados(2)});
function subir(valor){
  if(valor==1){
      if(indiceFilas==0){
        indiceFilas=alto1-1;
      }
      else{
        indiceFilas--;
        }
  }
  else if(valor==2){
    if(indiceFilas==alto1-1){
      indiceFilas=0;
    }
    else{
      indiceFilas++;
    }
  }
//  window.alert(indiceFilas);
  detectarPosiciones(indiceFilas,indiceColumnas,alto1,ancho,matriz);
}
function lados(valor){
  if(valor==1){
    if(indiceColumnas==0){
      indiceColumnas=ancho-1;
    }
    else{
      indiceColumnas--;
    }
  }
  else if(valor==2){
    if(indiceColumnas==ancho-1){
      indiceColumnas=0;
    }
    else{
      indiceColumnas++;
    }
  }
//window.alert(indiceColumnas);
detectarPosiciones(indiceFilas,indiceColumnas,alto1,ancho,matriz);
}
