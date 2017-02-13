

function detectarPosiciones(y,i,ancho,largo,matriz2){
  var contador=0;
  var contador2=0;
  var ban=true;
  var i=i;//filas
  var y=y;//columnas
  var largo=largo;
  var ancho=ancho;
  var x=0;
  var z=0;
  var array=new Array();
  array= matriz2;

  for( x = i;contador<3;x++){
      z=0;
    if(array[x+1]===undefined){
        if(x>largo){
          x=0;
        }
      }
    else if(array[x-1]===undefined){
        x=largo-1;
      }
      else{
        if(ban){
            x=i;
            ban=false;
          }

        }
  var w=x
  contador2=0;
  for(z=y-1;contador2<3;z++){
      if(array[w][z+1]===null){

        if(z>largo){
          z=0;
      }
        }
      else if(array[x][z-1]===null){

        w=-1;
        z=ancho-1;
      }
      if(x==0){
        //pintar(array[x][z]);
        pintar(x,z);
      }
      else{
        //pintar(array[x-1][z]);
        pintar(x-1,z);
    }
    contador2++;
  } //cierre de for anidado
  contador++;


}
}//cierre de funcion


function pintar(columna,fila){
cell=document.getElementById(randomFila+ ":"+randomColumna)
  cell.style.backgroundColor='red';
}
