
var aux
var contador=0
var contador2=0
var ban=true;

for(int x = i;contador<3;x++){
int z=0
  if(array[x+1,z]==null){
    if(x>largo){
    x=0;
    }
  }
  else if(array[x-1,z]==null){
    x=largo-1;
  }
  else{
    if(ban){
    x=i;
  }

  }
var w=x
contador2=0;
  for(z=y-1;contador2<3;z++){
      if(array[w,z+1]==null){

        if(z>largo){
          z=0;
      }
        }
      else if(array[x,z-1]==null){

        w=-1;
        z=ancho-1;
      }
      if(x==0){
        pintar(array[x,z]);
      }
      else{
        pintar(array[x-1,z]);
    }
    contador2++;
  } //cierre de for anidado
  contador++;


}
